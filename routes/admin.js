const path = require("path");

const express = require("express");

const router = express.Router();
const productsController = require("../controllers/products");

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProducts);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddPoducts);

module.exports = router;
