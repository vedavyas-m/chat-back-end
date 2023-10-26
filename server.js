const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

const { chats } = require("./data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleWare");
const app = express();

app.use(express.json());

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
app.get("/", (req, res) => {
  res.send("running");
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`server started on port ${port}`.red.bold);
});
