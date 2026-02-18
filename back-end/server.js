// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });








// const express = require("express");

// const app = express();

// app.get("/health", (req, res) => {
//   res.status(200).json({
//     status: "OK",
//     message: "Server is running"
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });




// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Health route
// app.get("/health", (req, res) => {
//   res.json({ status: "Server running ✅" });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );





// ✅ Import express
// const express = require("express");

// // ✅ Create app
// const app = express();

// // ✅ Import routes
// const productRoutes = require("./routes/productRoutes");

// // ✅ Middleware
// app.use(express.json());

// // ✅ Routes
// app.use("/api/products", productRoutes);

// // ✅ Health endpoint
// app.get("/health", (req, res) => {
//   res.json({
//     status: "OK",
//     message: "Server running"
//   });
// });

// // ✅ Start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });



// import packages
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/onlinestore")
.then(() => {
  console.log("MongoDB Connected ✅");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch(err => console.log(err));



