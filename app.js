const express = require("express");

const app = express();

app.use("/secondPage", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>Second Page loaded</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello From Express!!</h1>");
});

app.listen(3000);
console.log("Server is listening on port 3000");
