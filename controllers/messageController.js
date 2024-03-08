const asyncHandler = require("express-async-handler");

exports.getMessageList = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: messages page");
});

exports.getCreateMessage = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: create message page");
});

exports.postCreateMessage = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: create message post");
});

exports.getEditMessage = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: edit message page");
});

exports.postEditMessage = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: edit message post");
});

exports.postDeleteMessage = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: delete message page");
});
