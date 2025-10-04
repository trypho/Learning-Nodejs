const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoute);
app.use(shopRoute);

app.listen(3000);
console.log("Server is listening on port 3000");
