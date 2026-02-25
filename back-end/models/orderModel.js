const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        quantity: Number,
        size: String,
      },
    ],
    total: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "Processing" }, // Order status
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
