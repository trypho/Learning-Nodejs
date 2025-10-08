const products = [];
const path = require("path");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addProduct.html"));
};

exports.postProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.displayProducts = products;
