const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message_text: { type: String, required: true, maxLength: 100 },
  author_name: { type: String, required: true, maxLength: 100 },
  creation_date: { type: Date },
});

module.exports = mongoose.model("Message", MessageSchema);
