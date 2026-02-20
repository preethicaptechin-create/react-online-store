// const express = require("express");
// const app = express();

// const productRoutes = require("./routes/productRoutes");

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API running...");
// });

// app.use("/api/products", productRoutes);

// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });


const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error"
  });
};

export default errorHandler;