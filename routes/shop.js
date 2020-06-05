const express = require("express");
const path = require("path");
const adminHandler = require("./admin");
const rootDir = require("../utils/rootDir");

const router = express.Router();

router.get("/", (req, res, next) => {
  /**
   * Express looks for views by default in the views folder, AND we defined
   * pug as the default view engine, so only the name of the pug file is needed.
   */
  res.render("shop", {
    pageTitle: "My shop",
    products: adminHandler.products,
    path: "/",
  });
});

exports.routes = router;
