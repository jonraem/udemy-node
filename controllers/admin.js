const Product = require("../models/product");

const getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Admin: Add product",
    path: "/admin/add-product",
  });
};

const postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      pageTitle: "Admin: Products",
      products: products,
      hasProducts: !!products.length,
      path: "/admin/products",
    });
  });
};

module.exports = { getAddProduct, postAddProduct, getProducts };
