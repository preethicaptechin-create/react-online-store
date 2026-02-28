
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



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// require("dotenv").config();
// const multer = require("multer");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ────────────────────────────────────────────────
// // Middleware
// // ────────────────────────────────────────────────
// app.use(cors());                           // Allow frontend (React) to connect
// app.use(express.json());                   // Parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Parse form data if needed

// // Serve static files (uploaded images, etc.)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads"),
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });
// const upload = multer({ storage });

// // Upload route
// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) return res.status(400).json({ message: "No file uploaded" });

//   // Send back full URL of the image
//   const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
//   res.json({ imageUrl });
// });
// // Optional: log every request (very useful while developing)
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
//   next();
// });

// // ────────────────────────────────────────────────
// // Routes
// // ────────────────────────────────────────────────
// app.use("/api/products",  require("./routes/productRoutes"));
// app.use("/api/categories", require("./routes/categoryRoutes"));
// app.use("/api/test",      require("./routes/testRoutes"));
// app.use("/api/auth",      require("./routes/authRoutes"));
// app.use("/api/orders",    require("./routes/orderRoutes"));
// app.use("/api/admin",     require("./routes/adminRoutes"));
// app.use("/api/admin/orders", require("./routes/adminorderRoutes"));

// app.use((req, res) => {
//   res.status(404).json({ 
//     success: false,
//     message: "Route not found" 
//   });
// });

// // Global error handler (must be last)
// app.use((err, req, res, next) => {
//   console.error("SERVER ERROR:", err.stack);
  
//   const status = err.status || 500;
//   const message = err.message || "Internal Server Error";

//   res.status(status).json({
//     success: false,
//     message,
//     ...(process.env.NODE_ENV === "development" && { stack: err.stack })
//   });
// });

// // ────────────────────────────────────────────────
// // MongoDB Connection + Start Server
// // ────────────────────────────────────────────────
// mongoose
//   .connect(process.env.MONGO_URI, {
//     serverSelectionTimeoutMS: 10000,
//     // You can add more options if needed:
//     // useNewUrlParser: true,        // no longer needed in newer mongoose
//     // useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB Connected ✅");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error ❌:", err);
//     // You can decide whether to exit or keep server alive
//     // process.exit(1); // ← optional: stop if DB is critical
//   });

// // Start server **regardless** of DB connection status
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT} 🚀`);
// });


// // server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const multer = require("multer");
// const fs = require("fs");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ────────────────────────────────────────────────
// // Middleware
// // ────────────────────────────────────────────────
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Logging middleware (all requests)
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
//   next();
// });

// // Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// // Serve uploaded images
// app.use("/uploads", express.static(uploadDir));

// // ────────────────────────────────────────────────
// // Multer configuration for image upload
// // ────────────────────────────────────────────────
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadDir),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // Upload a single image
// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) return res.status(400).json({ message: "No file uploaded" });

//   const host = req.protocol + "://" + req.get("host");
//   const imageUrl = `${host}/uploads/${req.file.filename}`;
//   res.json({ imageUrl });
// });

// // Get all uploaded images (for frontend gallery)
// app.get("/images", (req, res) => {
//   try {
//     const files = fs.readdirSync(uploadDir);
//     const host = req.protocol + "://" + req.get("host");
//     const images = files.map(file => `${host}/uploads/${file}`);
//     res.json(images);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Unable to read uploads folder" });
//   }
// });

// // ────────────────────────────────────────────────
// // API Routes (your existing routes)
// // ────────────────────────────────────────────────
// app.use("/api/products",  require("./routes/productRoutes"));
// app.use("/api/categories", require("./routes/categoryRoutes"));
// app.use("/api/test",      require("./routes/testRoutes"));
// app.use("/api/auth",      require("./routes/authRoutes"));
// app.use("/api/orders",    require("./routes/orderRoutes"));
// app.use("/api/admin",     require("./routes/adminRoutes"));
// app.use("/api/admin/orders", require("./routes/adminorderRoutes"));

// // 404 Handler
// app.use((req, res) => {
//   res.status(404).json({ success: false, message: "Route not found" });
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("SERVER ERROR:", err.stack);
//   const status = err.status || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(status).json({
//     success: false,
//     message,
//     ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
//   });
// });

// // ────────────────────────────────────────────────
// // MongoDB Connection + Start Server
// // ────────────────────────────────────────────────
// mongoose
//   .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 })
//   .then(() => console.log("MongoDB Connected ✅"))
//   .catch(err => console.error("MongoDB connection error ❌:", err));

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT} 🚀`);
// });




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ────────────────────────────────────────────────
// Middleware
// ────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Ensure uploads folder exists
const UPLOADS_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST /upload route
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ message: "Upload successful", filename: req.file.filename });
});

// Serve uploaded images
app.use("/uploads", express.static(UPLOADS_DIR));

// GET /images route
app.get("/images", (req, res) => {
  fs.readdir(UPLOADS_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: "Cannot read files" });
    const urls = files.map((file) => `http://localhost:5000/uploads/${file}`);
    res.json(urls);
  });
});


// Your other API routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/admin/orders", require("./routes/adminorderRoutes"));

// ────────────────────────────────────────────────
// Catch-all 404 & global error handler
// ────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.stack || err);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { error: err.stack }),
  });
});

// ────────────────────────────────────────────────
// MongoDB + Start server
// ────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB connection error ❌:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});