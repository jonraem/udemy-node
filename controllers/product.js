const Product = require("../models/product");

const getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "My shop: Add product",
    path: "/admin/add-product",
    addProductIsActive: true,
  });
};

const postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

const getShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      pageTitle: "My shop",
      products: products,
      hasProducts: !!products.length,
      path: "/",
      shopIsActive: true,
    });
  });
};

module.exports = { getAddProduct, postAddProduct, getShop };
