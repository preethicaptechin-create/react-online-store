
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



const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    console.log("Connected to DB:", mongoose.connection.name);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
