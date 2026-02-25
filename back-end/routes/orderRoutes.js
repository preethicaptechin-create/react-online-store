const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { createOrder, getOrderById } = require("../controllers/orderController");

// POST create order
router.post("/", protect, createOrder);

// GET order by ID
router.get("/:id", protect, getOrderById);

module.exports = router;