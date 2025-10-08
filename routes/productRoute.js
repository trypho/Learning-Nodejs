const express = require("express");
const productController = require("../controllers/ProductController");

const router = express.Router();

router.get("/addProduct", productController.getProducts);

router.post("/product", productController.postProduct);
module.exports = router;
