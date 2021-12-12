const express = require("express")

const app = express()

app.use(express.json())


const productController = require("./controllers/products.controller")

app.use("/products", productController)
module.exports = app