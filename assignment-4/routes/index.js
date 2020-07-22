const express = require("express");
const path = require("path");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "Add user",
    path: "/",
  });
});

router.post("/", (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect("/users");
});

exports.routes = router;
exports.users = users;
