
// const express = require("express");
// const router = express.Router();

// const { getProducts } = require("../controllers/productController");

// router.get("/", getProducts);
// // router.get("/:id", getProductById);


// module.exports = router;



const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct
} = require("../controllers/productController");

// GET all products
router.get("/", getProducts);

// CREATE new product
router.post("/", createProduct);

// (Optional) GET product by ID
// router.get("/:id", getProductById);

module.exports = router;
