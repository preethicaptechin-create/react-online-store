const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const Product = require("../models/productModel"); // Path to your Product model

const seedProducts = [
  {
    name: "Smartphone X Pro",
    price: 699,
    description: "A flagship mobile phone with an excellent camera and battery life.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
  },
  {
    name: "Classic Cotton T-Shirt",
    price: 25,
    description: "Comfortable and stylish 100% cotton t-shirt for men.",
    category: "men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
  },
  {
    name: "Elegant Summer Dress",
    price: 45,
    description: "Beautiful floral summer dress for women.",
    category: "women",
    image: "https://images.unsplash.com/photo-1572804013309-82a89b4fbc68?w=500&q=80",
  },
  {
    name: "Fun Building Blocks",
    price: 15,
    description: "Educational building blocks set for kids.",
    category: "kids",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
  },
  {
    name: "Luxury Lipstick",
    price: 20,
    description: "Long-lasting matte lipstick.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
    
  },
  {
    name: "Running Shoes",
    price: 85,
    description: "Lightweight and comfortable running shoes.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  }
];

const seedDatabase = async () => {
  try {
    // Determine the MongoDB URI (checking env or using default local one)
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/onlinestore";
    console.log(`Connecting to MongoDB at: ${mongoUri}`);
    
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 });
    console.log("MongoDB Connected ✅");

    // Clear existing products (optional, uncomment if you want a clean slate every time)
    // await Product.deleteMany();
    // console.log("Cleared existing products.");

    // Insert new products
    await Product.insertMany(seedProducts);
    console.log("Successfully seeded products! 🌱");

    process.exit(0);
  } catch (error) {
    console.error("Error with script: ❌", error);
    process.exit(1);
  }
};

seedDatabase();