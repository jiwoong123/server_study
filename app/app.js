"use strict";

const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const home = require("./src/routes/home");

//app settings
// app.set("views", "./src/views");
// app.set("view engine", "html");
// app.engine("html", require("ejs").renderFile);

//middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
