const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
	firstName: { type: String, required: true, minLength: 3 },
	lastName: { type: String, required: true, minLength: 3 },
	username: { type: String, required: true, minLength: 3 },
	password: { type: String, required: true, minLength: 12 },
	status: { type: String, required: true, enum: ["guest", "member"] },
});

module.exports = mongoose.model("User", user);
