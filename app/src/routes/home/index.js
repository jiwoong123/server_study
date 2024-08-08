"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
const auth = require("../auth/index");

router.get("/", auth.outer, ctrl.output.index);
router.get("/login", auth.login, ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;
