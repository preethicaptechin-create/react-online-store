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




// const Product = require("../models/productModel");

// // GET all products
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();

//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // CREATE new product
// exports.createProduct = async (req, res) => {
//   try {
//     const { name, price, image, category, description } = req.body;

//     // Basic validation
//     if (!name || !price) {
//       return res.status(400).json({ message: "Name and Price are required" });
//     }

//     const newProduct = new Product({
//       name,
//       price,
//       image,
//       category,
//       description
//     });

//     const savedProduct = await newProduct.save();

//     res.status(201).json(savedProduct);

//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };



// CREATE new product
// 




// 



const Product = require("../models/productModel");

// ✅ GET all products (with category filter support)
// exports.getProducts = async (req, res) => {
//   try {
//     const { category } = req.query;

//     let products;

//     if (category) {
//       // Case-insensitive filter
//       products = await Product.find({
//         category: { $regex: new RegExp(category, "i") }
//       });
//     } else {
//       products = await Product.find();
//     }

//     res.status(200).json(products);

//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

exports.getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;

    let filter = {};

    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    const products = await Product.find(filter);

    res.status(200).json(products);

  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// ✅ GET single product
exports.getSingleProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);

  } catch (error) {

    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// ✅ CREATE new product
exports.createProduct = async (req, res) => {
  try {

    const { name, price, category, description } = req.body;

    // Validation
    if (!name || !price) {
      return res.status(400).json({
        message: "Name and Price are required"
      });
    }

    const newProduct = new Product({
      name,
      price,
      category: category ? category.toLowerCase() : "",
      description,
      image: req.file ? req.file.filename : ""
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product created successfully",
      product: savedProduct
    });

  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server Error" });
  }
};