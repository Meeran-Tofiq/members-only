const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	title: { type: String, required: true, minLength: 3 },
	content: { type: String, required: true, maxLength: 250 },
	date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Message", message);
