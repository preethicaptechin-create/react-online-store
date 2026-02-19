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




const Product = require("../models/productModel");

// GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, image, category, description } = req.body;

    // Basic validation
    if (!name || !price) {
      return res.status(400).json({ message: "Name and Price are required" });
    }

    const newProduct = new Product({
      name,
      price,
      image,
      category,
      description
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);

  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


