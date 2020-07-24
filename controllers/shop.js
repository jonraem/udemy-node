const Product = require("../models/product");

const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      pageTitle: "My shop",
      products: products,
      hasProducts: !!products.length,
      path: "/",
    });
  });
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products", {
      pageTitle: "My shop: Products",
      products: products,
      hasProducts: !!products.length,
      path: "/products",
    });
  });
};

const getCart = (req, res, next) => {
  Product.fetchAll((cart) => {
    res.render("shop/cart", {
      pageTitle: "My cart",
      path: "/cart",
    });
  });
};
const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

module.exports = { getIndex, getProducts, getCart, getCheckout };
