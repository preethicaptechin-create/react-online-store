// const Order = require("../models/orderModel");

// exports.createOrder = async (req, res) => {
//   const { items, total, address } = req.body;
//   if (!items || items.length === 0) {
//     return res.status(400).json({ message: "Cart is empty" });
//   }

//   try {
//     const order = await Order.create({
//       user: req.user._id,
//       items,
//       total,
//       address,
//     });
//     res.status(201).json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id).populate("user", "name email");
//     if (!order) return res.status(404).json({ message: "Order not found" });
//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };





// const Order = require("../models/orderModel");

// exports.createOrder = async (req, res) => {
//   const {
//     items,
//     total,
//     firstName,
//     lastName,
//     address,
//     mobile,
//     paymentMethod,
//   } = req.body;
// const order = await Order.create({
//     user: req.user._id,
//     items,
//     total,
//     firstName,
//     lastName,
//     address,
//     mobile,
//     paymentMethod,
//   });
//   if (!items || items.length === 0) {
//     return res.status(400).json({ message: "Cart is empty" });
//   }

//   try {
//     const order = await Order.create({
//       user: req.user._id, // from JWT middleware
//       items,
//       total,
//       firstName,
//       lastName,
//       address,
//       mobile,
//       paymentMethod,
//     });

//     res.status(201).json(order);
//   } catch (err) {
//     console.error("Order creation error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };



const Order = require("../models/orderModel");

exports.createOrder = async (req, res) => {
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

    // ✅ Validate cart FIRST
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // ✅ Create order ONCE
    const order = await Order.create({
      user: req.user._id, // from JWT middleware
      items,
      total,
      firstName,
      lastName,
      address,
      mobile,
      paymentMethod,
    });

    res.status(201).json(order);
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ message: "Server error" });
  }
};