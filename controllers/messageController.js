const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Message = require("../models/message");

exports.getMessageList = asyncHandler(async (req, res, next) => {
	let messageList;
	if (req.user)
		messageList = await Message.find().limit(10).populate("user").exec();
	else messageList = await Message.find().limit(10).exec();

	res.render("index", {
		title: "Home",
		messageList,
		isLoggedIn: !!req.user,
	});
});

exports.getCreateMessage = asyncHandler(async (req, res, next) => {
	res.render("message_form", {
		title: "Create a Message",
	});
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
