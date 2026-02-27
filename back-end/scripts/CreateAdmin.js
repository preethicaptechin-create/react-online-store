// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";
// import Admin from "../models/admin.js";

const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      username: "preethi",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
};

createAdmin();