const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");

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

exports.postCreateMessage = [
	body("title", "Title must be between 3 and 75 characters")
		.trim()
		.isLength({ min: 3, max: 75 })
		.escape(),
	body("content", "Content must be between 25 and 250 characters")
		.trim()
		.isLength({ min: 5, max: 250 })
		.escape(),
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);
		const message = new Message({
			user: req.user.id,
			title: req.body.title,
			content: req.body.content,
		});

		if (!errors.isEmpty()) {
			res.render("message_form", {
				title: "Create a Message",
				message,
				errors: errors.array(),
			});
		}

		await message.save();
		res.redirect("/");
	}),
];

exports.getEditMessage = asyncHandler(async (req, res, next) => {
	const message = await Message.findById(req.params.message_id).exec();

	res.render("message_form", {
		title: "Edit Message",
		message,
	});
});

exports.postEditMessage = [
	body("title", "Title must be between 3 and 75 characters")
		.trim()
		.isLength({ min: 3, max: 75 })
		.escape(),
	body("content", "Content must be between 25 and 250 characters")
		.trim()
		.isLength({ min: 5, max: 250 })
		.escape(),
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);
		const message = new Message({
			user: req.user.id,
			title: req.body.title,
			content: req.body.content,
			_id: req.params.message_id,
		});

		if (!errors.isEmpty()) {
			res.render("message_form", {
				title: "Create a Message",
				message,
				errors: errors.array(),
			});
		}

		await Message.findByIdAndUpdate(
			req.params.message_id,
			message,
			{}
		).exec();
		res.redirect("/");
	}),
];

exports.postDeleteMessage = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: delete message page");
});
