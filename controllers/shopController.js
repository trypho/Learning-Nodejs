const productController = require("./ProductController");
const path = require("path");

exports.getProducts = (req, res, next) => {
  const products = productController.displayProducts;
  console.log("This was a success", products);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
