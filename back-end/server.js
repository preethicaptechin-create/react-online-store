
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 5000;

// app.use(express.json());

// const productRoutes = require("./routes/productRoutes");
// app.use("/api/products", productRoutes);
// const testRoutes = require("./routes/testRoutes");
// app.use("/api/test", testRoutes);


// mongoose.connect("mongodb://127.0.0.1:27017/onlinestore")
// .then(() => {
//   console.log("MongoDB Connected ✅");

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

// })
// .catch(err => console.log(err));







// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(express.json());

// // Routes
// const productRoutes = require("./routes/productRoutes");
// app.use("/api/products", productRoutes);

// const testRoutes = require("./routes/testRoutes");
// app.use("/api/test", testRoutes);

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/onlinestore")
//   .then(() => {
//     console.log("MongoDB Connected ✅");
//     console.log("Connected to DB:", mongoose.connection.name);

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });



// 




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// /* ==============================
//    MIDDLEWARE
// ============================== */

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Static folder for uploaded images
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// /* ==============================
//    ROUTES
// ============================== */

// const productRoutes = require("./routes/productRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const testRoutes = require("./routes/testRoutes");
// const authRoutes = require("./routes/authRoutes");
// const orderRoutes = require("./routes/orderRoutes");

// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/test", testRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/orders", orderRoutes);



// /* ==============================
//    DATABASE CONNECTION
// ============================== */

// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => {
// //     console.log("MongoDB Connected ✅");
// mongoose
//   .connect(process.env.MONGO_URI, {
//     serverSelectionTimeoutMS: 10000,
//   })
//   .then(() => {
//     console.log("MongoDB Connected ✅");

//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT} 🚀`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error ❌:", err);
//   });



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());              // Parses incoming JSON requests
// app.use(express.urlencoded({ extended: true }));
// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes
// const productRoutes = require("./routes/productRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const testRoutes = require("./routes/testRoutes");
// const authRoutes = require("./routes/authRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/test", testRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/admin", adminRoutes);
// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 })
//   .then(() => {
//     console.log("MongoDB Connected ✅");
//     app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} 🚀`));
//   })
//   .catch((err) => console.error("MongoDB connection error ❌:", err));

// // Optional error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Server error" });
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ────────────────────────────────────────────────
// Middleware
// ────────────────────────────────────────────────
app.use(cors());                           // Allow frontend (React) to connect
app.use(express.json());                   // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data if needed

// Serve static files (uploaded images, etc.)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/test-image", (req, res) => {
  res.sendFile(path.join(__dirname, "uploads/1772260495779-885314867.jpg"));
});

// Optional: log every request (very useful while developing)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// ────────────────────────────────────────────────
// Routes
// ────────────────────────────────────────────────
app.use("/api/products",  require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/test",      require("./routes/testRoutes"));
app.use("/api/auth",      require("./routes/authRoutes"));
app.use("/api/orders",    require("./routes/orderRoutes"));
app.use("/api/admin",     require("./routes/adminRoutes"));
app.use("/api/admin/orders", require("./routes/adminorderRoutes"));

app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: "Route not found" 
  });
});

// Global error handler (must be last)
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.stack);
  
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
});

// ────────────────────────────────────────────────
// MongoDB Connection + Start Server
// ────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    // You can add more options if needed:
    // useNewUrlParser: true,        // no longer needed in newer mongoose
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌:", err);
    // You can decide whether to exit or keep server alive
    // process.exit(1); // ← optional: stop if DB is critical
  });

// Start server **regardless** of DB connection status
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});