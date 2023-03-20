const Message = require("../models/messages_mdl");

async function messageCreate(
  message_text,
  author_name,
  creation_date = new Date()
) {
  const message = new Message({ message_text, author_name, creation_date });
  await message.save();
  console.log(`Added message: ${message_text}`);
}

// Display Message create form on GET.
exports.message_create_get = (req, res) => {
  res.render("form");
};

// Handle Message create on POST.
exports.message_create_post = (req, res, next) => {
  messageCreate(req.body.message, req.body.author);
  res.redirect("/");
};
