const express = require("express");
const app = express();
const PORT = 5000;
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
require("dotenv").config();

//データベース接続
const mongoose = require("mongoose")
mongoose.connect(process.env.Mongo_URL)
.then(() => {
  console.log("Connecting to the DB......");
}).catch(() => {
  console.log("error : couldn't connect with the DB......");
})

//midlleware
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(PORT, () => console.log("The server has started"));