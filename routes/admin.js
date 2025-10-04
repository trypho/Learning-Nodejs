const express = require("express");

const router = express.Router();

router.get("/addProduct", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="product" /><button>Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
