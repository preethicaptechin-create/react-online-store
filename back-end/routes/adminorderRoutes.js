// import express from "express";
// import Order from "../models/orderModel.js";
// import { adminAuth } from "../middleware/adminAuth.js"; // JWT middleware

// const router = express.Router();

// // Update order status (Admin-only)
// router.put("/:id/status", adminAuth, async (req, res) => {
//   try {
//     const { status } = req.body;

//     // Find order by ID and update status
//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!order) return res.status(404).json({ message: "Order not found" });

//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;

// const express = require("express");
// const router = express.Router();
// const Order = require("../models/orderModel"); // make sure this path is correct
// const { adminAuth } = require("../middleware/adminauthMiddleware"); // JWT auth middleware

// // ────────────────
// // GET all orders (Admin-only)
// // ────────────────
// router.get("/", adminAuth, async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 }); // newest first
//     res.json({ success: true, data: orders });
//   } catch (err) {
//     console.error("Error fetching orders:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // ────────────────
// // UPDATE order status (Admin-only)
// // ────────────────
// router.put("/:id/status", adminAuth, async (req, res) => {
//   try {
//     const { status } = req.body;

//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!order) {
//       return res.status(404).json({ success: false, message: "Order not found" });
//     }

//     res.json({ success: true, data: order });
//   } catch (err) {
//     console.error("Error updating order status:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// module.exports = router;

// routes/adminorderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");

const adminAuth = require("../middleware/adminauthMiddleware");   // ← no { }

router.get("/", adminAuth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.put("/:id/status", adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;