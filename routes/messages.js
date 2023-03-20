const express = require("express");
const router = express.Router();
const messages_controller = require("../controllers/messagesController");
const { message_create_get, message_create_post } = messages_controller;

router.get("/", message_create_get);

router.post("/addnew", message_create_post);

module.exports = router;
