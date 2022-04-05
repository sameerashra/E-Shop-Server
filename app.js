const express = require('express');
const app = express();
const bodyParser = require("body-parser");

let mongoose = require("./db/mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoute = require('./routes/products')
app.use('/products', productRoute);

app.listen(3000, () => {
    console.log("Server running at port 3000");
})