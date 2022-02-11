const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Admin: Add product',
    path: '/admin/add-product',
  });
};

const postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/admin/products');
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      pageTitle: 'Admin: Products',
      products: products,
      hasProducts: !!products.length,
      path: '/admin/products',
    });
  });
};

module.exports = { getAddProduct, postAddProduct, getProducts };
