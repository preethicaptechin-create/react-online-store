// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//         name: String,
//         price: Number,
//         quantity: Number,
//         size: String,
//       },
//     ],
//     total: { type: Number, required: true },
//     address: { type: String, required: true },
//     status: { type: String, default: "Processing" }, // Order status
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);



// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//         name: String,
//         price: Number,
//         quantity: Number,
//         size: String,
//       },
//     ],
//     total: { type: Number, required: true },
//     firstName: { type: String, required: true },  // ✅ add firstName
//     lastName: { type: String, required: true },   // ✅ add lastName
//     address: { type: String, required: true },
//     mobile: { type: String, required: true },    // ✅ add mobile
//     paymentMethod: { type: String, required: true }, // ✅ add payment method
//     status: { type: String, default: "Processing" }, // Order status
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);



// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: { 
//       type: mongoose.Schema.Types.ObjectId, 
//       ref: "User", 
//       required: true 
//     },

//     items: [
//       {
//         product: { 
//           type: mongoose.Schema.Types.ObjectId, 
//           ref: "Product",
//           required: true
//         },
//         name: { type: String, required: true },
//         price: { type: Number, required: true },
//         quantity: { type: Number, required: true },
//         size: String,
//       },
//     ],

//     total: { type: Number, required: true },

//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     address: { type: String, required: true },
//     mobile: { type: String, required: true },
//     paymentMethod: { type: String, required: true },

//     status: { 
//       type: String, 
//       default: "Processing" 
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);




// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     items: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Product",
//           required: true,
//         },
//         name: { type: String, required: true },
//         price: { type: Number, required: true },
//         quantity: { type: Number, required: true },
//         size: String,
//       },
//     ],

//     total: { type: Number, required: true },

//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     address: { type: String, required: true },
//     mobile: { type: String, required: true },
//     paymentMethod: { type: String, required: true },

//     status: {
//       type: String,
//       default: "Processing",
//     },
//   },



//   status: {
//       type: String,
//       enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
//       default: "Processing",
//     },
//     paymentStatus: {
//       type: String,
//       enum: ["Pending", "Paid", "Failed"],
//       default: "Pending",
//     },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        size: String,
      },
    ],

    total: { type: Number, required: true },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    paymentMethod: { type: String, required: true },

    // ✅ SINGLE status field (merged correctly)
    status: {
      type: String,
      enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Processing",
    },

    // ✅ payment status
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);