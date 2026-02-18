// exports.getProducts = (req, res) => {
//   res.json([
//     { id: 1, name: "Shirt" },
//     { id: 2, name: "Shoes" }
//   ]);
// };


// const Product = require("../models/productModel");

// exports.getProducts = async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// };
// exports.getProductById = async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   res.json(product);
// };

// const Product = require("../models/productModel");

// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }



// };


exports.getProducts = (req, res) => {
  res.json([
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 60000 }
  ]);
};

