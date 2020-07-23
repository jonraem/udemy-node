const products = [];

const getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "My shop: Add product",
    path: "/admin/add-product",
    addProductIsActive: true,
  });
};

const postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

const getShop = (req, res, next) => {
  res.render("shop", {
    pageTitle: "My shop",
    products: products,
    hasProducts: !!products.length,
    path: "/",
    shopIsActive: true,
  });
};

module.exports = { getAddProduct, postAddProduct, getShop, products };
