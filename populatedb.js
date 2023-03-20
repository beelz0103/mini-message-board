#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Message = require("./models/messages");

const messages = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = `mongodb+srv://tet:XBRCYAMJeM9s8SG0@cluster0.djbois6.mongodb.net/local_library?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
`XBRCYAMJeM9s8SG0`;

`mongodb+srv://tet:XBRCYAMJeM9s8SG0@cluster0.djbois6.mongodb.net/local_library?retryWrites=true&w=majority`;

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createMessages();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function messageCreate(
  message_text,
  author_name,
  creation_date = new Date()
) {
  const message = new Message({ message_text, author_name, creation_date });
  await message.save();
  messages.push(message);
  console.log(`Added message: ${message_text}`);
}

async function createMessages() {
  console.log("Adding messsages");
  await Promise.all([
    messageCreate("hi", "tet"),
    messageCreate("Yo hello", "Beelz"),
  ]);
}
