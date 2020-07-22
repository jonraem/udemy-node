const express = require("express");
const path = require("path");
const indexHandler = require("./index");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users",
    users: indexHandler.users,
    path: "/users",
  });
});

module.exports = router;
