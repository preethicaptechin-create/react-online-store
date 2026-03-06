const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const app = express();

// ────────────────────────────────────────────────
// Middleware
// ────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logging (skip in test to reduce noise)
if (process.env.NODE_ENV !== "test") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
  });
}

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

// Serve uploaded images
app.use("/uploads", express.static(UPLOADS_DIR));

// Helper: respond with list of image URLs
const sendImageList = (req, res) => {
  fs.readdir(UPLOADS_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: "Cannot read files" });
    const base = req.protocol + "://" + req.get("host");
    const urls = files.map((file) => `${base}/uploads/${file}`);
    res.json(urls);
  });
};

// Gallery upload handler
const uploadHandler = (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ message: "Upload successful", filename: req.file.filename });
};

// Gallery routes
app.get("/api/images", sendImageList);
app.get("/images", sendImageList);
app.post("/api/upload", upload.single("image"), uploadHandler);
app.post("/upload", upload.single("image"), uploadHandler);

// API routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/admin/orders", require("./routes/adminorderRoutes"));

// 404 & error handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { error: err.stack }),
  });
});

module.exports = app;
