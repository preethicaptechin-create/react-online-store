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