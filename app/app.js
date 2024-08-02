"use strict";

const express = require("express");
const app = express();
const home = require("./src/routes/home");


//app settings
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middleware
app.use("/", home);


module.exports = app;