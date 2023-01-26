const express = require("express");
const router = express.Router();
const producController = require("../controllers/product");

router.get("/products", producController.findProduct);
router.post("/product", producController.createProduct);

module.exports = router;
