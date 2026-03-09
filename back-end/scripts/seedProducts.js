const mongoose = require("mongoose");
const Product = require("../models/productModel");
require("dotenv").config();

// Products data to seed
const products = [
  {
    name: "Kids Frock",
    price: 800,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=400&auto=format&fit=crop",
    category: "kids",
    description: "Beautiful Kids Frock"
  },
  {
    name: "Kids Coat",
    price: 500,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=400&auto=format&fit=crop",
    category: "kids",
    description: "Warm Kids Coat"
  },
  {
    name: "Floral skirt",
    price: 200,
    image: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=400&auto=format&fit=crop",
    category: "women",
    description: "Beautiful floral skirt for women"
  },
  {
    name: "Denim coat",
    price: 200,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=400&auto=format&fit=crop",
    category: "men",
    description: "Classic men's denim coat"
  },
  {
    name: "Vivo Phone",
    price: 20000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
    category: "mobile",
    description: "Latest Vivo smartphone"
  },
  {
    name: "Running Shoes",
    price: 1500,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
    category: "shoes",
    description: "Comfortable running shoes"
  },
  {
    name: "Luxury Perfume",
    price: 1150,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format&fit=crop",
    category: "beauty",
    description: "Premium fragrance"
  }
];

// Determine the MongoDB URI
// If running inside docker-compose, process.env.MONGO_URI will likely be 'mongodb://mongo:27017/onlinestore'
// If running locally on host machine but connecting to Docker mongo, it would be 'mongodb://127.0.0.1:27018/onlinestore'
// If running a completely local mongo installation, it might be 'mongodb://127.0.0.1:27017/onlinestore'

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/onlinestore";

mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(async () => {
    console.log(`MongoDB Connected ✅ to ${MONGO_URI}`);
    
    // Clear existing products (optional, uncomment if you want a clean slate)
    // await Product.deleteMany({});
    // console.log("Cleared existing products.");

    // Insert the seed data
    await Product.insertMany(products);
    console.log("Products seeded successfully! 🚀");
    
    // Close the connection
    mongoose.connection.close();
    process.exit(0);
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌:", err);
    process.exit(1);
  });