const express = require("express");
const path = require("path");
const adminHandler = require("./admin");
const rootDir = require("../utils/rootDir");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminHandler.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

exports.routes = router;
