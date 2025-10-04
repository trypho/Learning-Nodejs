const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/addUser", (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username" /><button>Add User</button></form>'
  );
});

app.post("/user", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In the DEFAULT middleware");
  res.send("<h1>Hello From Express!!</h1>");
});

app.listen(3000);
console.log("Server is listening on port 3000");
