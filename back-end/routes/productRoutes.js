// const express = require("express");
// const router = express.Router();
// const { getProducts } = require("../controllers/productController");

// router.get("/", getProducts);

// module.exports = router;

const express = require("express");
const router = express.Router();

const { getProducts } = require("../controllers/productController");

router.get("/", getProducts);
// router.get("/:id", getProductById);


module.exports = router;


