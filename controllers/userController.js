const asyncHandler = require("express-async-handler");

exports.getSignUpUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user sign up page");
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
