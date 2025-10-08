const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const shopRoute = require("./routes/shopRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./controllers/errorHandler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(productRoute);
app.use(shopRoute);

app.use(errorHandler.getError);

app.listen(3000);
