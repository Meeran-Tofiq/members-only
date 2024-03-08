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
	res.send("NOT IMPLEMENTED: user sign up post");
});

exports.getLoginUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user login page");
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
