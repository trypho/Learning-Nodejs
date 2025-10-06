const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminData = require("./routes/admin");
const shopData = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminData.router);
app.use(shopData);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
