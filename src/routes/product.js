const express = require("express");
const router = express.Router();
const producController = require("../controllers/product");
router.get("/", producController.findProduct);

module.exports = router;
