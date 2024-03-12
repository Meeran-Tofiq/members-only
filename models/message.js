const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		title: { type: String, required: true, minLength: 3, maxLength: 75 },
		content: { type: String, required: true, minLength: 5, maxLength: 250 },
		date: { type: Date, default: Date.now() },
	},
	{
		virtuals: {
			url: {
				get() {
					return "/message/" + this._id;
				},
			},
		},
	}
);

module.exports = mongoose.model("Message", message);
