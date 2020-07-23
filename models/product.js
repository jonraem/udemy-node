const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/rootDir");
const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err || !fileContent) return cb([]);
    return cb(JSON.parse(fileContent));
  });
};

class Product {
  constructor(title) {
    this.title = title;
  }

  /**
   * Saves the product to the product list.
   */
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log("WRITE FILE ERROR: " + err);
      });
    });
  }

  /**
   * Fetches all products.
   *
   * This static method can be called via the class itself (instead of an
   * instantiated object). Callback is required because execution of readFile
   * callback is asynchronous and it will return undefined otherwise.
   */
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}

module.exports = Product;
