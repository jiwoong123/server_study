"use strict";

const auth = {
  outer: (req, res, next) => {
    const { id } = req.cookies;
    if (id) {
      console.log("${ id } has logined");
      return next();
    }
    res.redirect("/login");
    return;
  },

  login: (req, res, next) => {
    const { id } = req.cookies;
    if (id) {
      res.redirect("/");
    } else {
      next();
    }
  },
};

module.exports = auth;
