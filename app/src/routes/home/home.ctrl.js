"use strict";

const output = {
  index: (req, res) => {
    console.log("Cookies: ", req.cookies);
    console.log("Signed Cookies: ", req.signedCookies);
    res.sendFile(".");
  },
  login: (req, res) => {
    res.sendFile("/login.html");
  },
};

const process = {
  login: (req, res) => {
    const { id } = req.body;
    res.cookie("id", id).redirect("/");
  },
};

module.exports = {
  output,
  process,
};
