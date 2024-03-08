const asyncHandler = require("express-async-handler");

exports.getCreateUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user sign up page");
});

exports.postCreateUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user sign up post");
});

exports.getLoginUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user login page");
});

exports.postLoginUser = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user login post");
});

exports.getUserLogout = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user logout page");
});

exports.postUserLogout = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: user logout post");
});
