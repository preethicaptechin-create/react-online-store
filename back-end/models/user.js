// back-end/models/User.js
const mongoose = require("mongoose");

// Define schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
      refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

// Export model
module.exports = mongoose.model("User", userSchema);