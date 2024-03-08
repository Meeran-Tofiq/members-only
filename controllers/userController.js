const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

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

exports.postLoginUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user login post");
});

exports.getLogoutUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user logout page");
});

exports.postLogoutUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user logout post");
});
