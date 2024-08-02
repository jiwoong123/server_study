"use strict";

const express = require("express");
const app = express();
const home = require("./routes/home");


//app settings
app.set("views", "./views");
app.set("view engine", "ejs");

//middleware
app.use("/", home);


module.exports = app;