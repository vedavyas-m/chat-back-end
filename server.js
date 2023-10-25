const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connectDB = require("./config/db");
const colors = require("colors");
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
app.get("/", (req, res) => {
  res.send("running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((c) => c._id == req.params.id);
  res.send(singleChat);
});
app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`server started on port ${port}`.red.bold);
});
