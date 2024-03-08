const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

passport.use(
	new LocalStrategy(async (username, password, done) => {
		try {
			const user = await User.findOne({ username }).exec();

			if (!user) return done(null, false, "Incorrect username");
			else {
				const match = await bcrypt.compare(password, user.password);
				if (!match) return done(null, false, "Incorrect password");
			}

			return done(null, user);
		} catch (err) {
			return done(err);
		}
	})
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

exports.getSignUpUser = asyncHandler(async (req, res, next) => {
	res.render("sign_up_form", {
		title: "Sign Up",
	});
});

exports.postSignUpUser = asyncHandler(async (req, res, next) => {
	try {
		bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
			if (err) return next(err);

			const user = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				username: req.body.username,
				password: hashedPassword,
				status: "guest",
			});

			await user.save();
			res.redirect("/");
		});
	} catch (error) {
		return next(error);
	}
});

exports.getLoginUser = asyncHandler(async (req, res, next) => {
	res.render("log_in_page", { title: "Log In" });
});

exports.postLoginUser = passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/user/log-in",
});

exports.getLogoutUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user logout page");
});

exports.postLogoutUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user logout post");
});
