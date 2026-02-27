
// scripts/createAdmin.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../models/admin"; // check path

dotenv.config();

const createAdmin = async () => {
  try {
    // 1️⃣ Connect MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✅");

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // 3️⃣ Create Admin object
    const admin = new Admin({
      username: "admin",
      password: hashedPassword,
    });

    // 4️⃣ Save to DB
    await admin.save();
    console.log("Admin created ✅");

    process.exit();
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  }
};

createAdmin();