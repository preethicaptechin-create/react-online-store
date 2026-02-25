
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




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ==============================
   MIDDLEWARE
============================== */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ==============================
   ROUTES
============================== */

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);



/* ==============================
   DATABASE CONNECTION
============================== */

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected ✅");
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌:", err);
  });