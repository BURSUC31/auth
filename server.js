const express = require("express");
const usersRoute = require("./routes/api/users");
const usersAuth = require("./routes/api/auth");
const usersProfile = require("./routes/api/profile");
const usersPosts = require("./routes/api/posts");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);
mongoose.connection.once("open", () => {
  console.log("database connected");
});

app.use("/api/users", usersRoute);
app.use("/api/auth", usersAuth);
app.use("/api/profile", usersProfile);
app.use("/api/posts", usersPosts);
app.listen(5000, () => {
  console.log("server started");
});
