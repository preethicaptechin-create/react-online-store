// const express = require("express");
// const router = express.Router();
// const { protect } = require("../middleware/authMiddleware");
// const { createOrder, getOrderById } = require("../controllers/orderController");

// // POST create order
// router.post("/", protect, createOrder);

// // GET order by ID
// router.get("/:id", protect, getOrderById);

// module.exports = router;





// routes/orders.js
// import express from "express";
// import Order from "../models/Order.js";
// import authMiddleware from "../middleware/auth.js"; // JWT verify

// const router = express.Router();

// // POST /api/orders
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { items, total, firstName, lastName, address, mobile, paymentMethod } = req.body;

//     if (!items || !items.length) return res.status(400).json({ message: "Cart is empty" });

//     const order = new Order({
//       user: req.user._id, // from authMiddleware
//       items,
//       total,
//       firstName,
//       lastName,
//       address,
//       mobile,
//       paymentMethod,
//     });

//     await order.save();

//     res.status(201).json({ _id: order._id });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to place order" });
//   }
// });

// export default router;


// backend/routes/orders.js
// const express = require("express");
// const Order = require("../models/orderModel");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// // CREATE ORDER
// router.post("/", protect, async (req, res) => {
//   try {
//     const {
//       items,
//       total,
//       firstName,
//       lastName,
//       address,
//       mobile,
//       paymentMethod,
//     } = req.body;

//     if (!items || !items.length) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const order = new Order({
//       user: req.user._id,
//       items,
//       total,
//       firstName,
//       lastName,
//       address,
//       mobile,
//       paymentMethod,
//     });

//     await order.save();

//     res.status(201).json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to place order" });
//   }
// });

// // GET ORDER BY ID
// router.get("/:orderId", protect, async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.orderId).populate(
//       "items.product"
//     );

//     if (!order)
//       return res.status(404).json({ message: "Order not found" });

//     if (order.user.toString() !== req.user._id.toString()) {
//       return res.status(403).json({ message: "Not authorized" });
//     }

//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
  
// });
// // GET LOGGED-IN USER ORDERS (ORDER LIST)
// router.get("/my-orders", protect, async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user._id })
//       .sort({ createdAt: -1 });

//     res.json({
//       totalOrders: orders.length,
//       orders,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch orders" });
//   }
// });

// module.exports = router;




const express = require("express");
const Order = require("../models/orderModel");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ CREATE ORDER
router.post("/", protect, async (req, res) => {
  try {
    const {
      items,
      total,
      firstName,
      lastName,
      address,
      mobile,
      paymentMethod,
    } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = new Order({
      user: req.user._id,
      items,
      total,
      firstName,
      lastName,
      address,
      mobile,
      paymentMethod,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

// ✅ GET LOGGED-IN USER ORDERS (ORDER LIST)  ⭐ MUST BE HERE
router.get("/my-orders", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json({
      totalOrders: orders.length,
      orders,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// ✅ GET ORDER BY ID (KEEP THIS LAST)
router.get("/:orderId", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate(
      "items.product"
    );

    if (!order)
      return res.status(404).json({ message: "Order not found" });

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;