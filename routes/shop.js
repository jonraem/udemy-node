const express = require("express");
const path = require("path");
const adminHandler = require("./admin");
const rootDir = require("../utils/rootDir");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    pageTitle: "My shop",
    products: adminHandler.products,
    hasProducts: !!adminHandler.products.length,
    path: "/",
    shopIsActive: true,
  });
});

exports.routes = router;
