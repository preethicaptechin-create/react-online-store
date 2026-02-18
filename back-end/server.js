
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



// import packages
const express = require("express");
const mongoose = require("mongoose");

// create app
const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

// routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);

// connect MongoDB → then start server
mongoose.connect("mongodb://127.0.0.1:27017/onlinestore")
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
