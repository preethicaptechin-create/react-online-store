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



// const Product = require("../models/productModel");



// exports.getProducts = async (req, res) => {
//   try {
//     const { category, search } = req.query;

//     let filter = {};

//     if (category) {
//       filter.category = { $regex: category, $options: "i" };
//     }

//     if (search) {
//       filter.$or = [
//         { name: { $regex: search, $options: "i" } },
//         { category: { $regex: search, $options: "i" } },
//       ];
//     }

//     const products = await Product.find(filter);

//     res.status(200).json(products);

//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };


// // ✅ GET single product
// exports.getSingleProduct = async (req, res) => {
//   try {

//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json(product);

//   } catch (error) {

//     if (error.name === "CastError") {
//       return res.status(400).json({ message: "Invalid Product ID" });
//     }

//     console.error("Error fetching product:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };


// // ✅ CREATE new product
// exports.createProduct = async (req, res) => {
//   try {

//     const { name, price, category, description } = req.body;

//     // Validation
//     if (!name || !price) {
//       return res.status(400).json({
//         message: "Name and Price are required"
//       });
//     }

//     const newProduct = new Product({
//       name,
//       price,
//       category: category ? category.toLowerCase() : "",
//       description,
//       image: req.file ? req.file.filename : ""
//     });

//     const savedProduct = await newProduct.save();

//     res.status(201).json({
//       message: "Product created successfully",
//       product: savedProduct
//     });

//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };    





// const Product = require("../models/productModel");


// // ✅ GET all products (with category + search filter)
// exports.getProducts = async (req, res) => {
//   try {
//     const { category, search } = req.query;

//     let filter = {};

//     // 🔹 Category filter
//     if (category) {
//       filter.category = { $regex: category, $options: "i" };
//     }

//     // 🔹 Search filter (name OR category)
//     if (search) {
//       filter.$or = [
//         { name: { $regex: search, $options: "i" } },
//         { category: { $regex: search, $options: "i" } },
//       ];
//     }

//     const products = await Product.find(filter).sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       data: products,
//     });

//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };



// // ✅ GET single product
// exports.getSingleProduct = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findById(id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: product,
//     });

//   } catch (error) {

//     // 🔹 Invalid ObjectId
//     if (error.name === "CastError") {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid Product ID",
//       });
//     }

//     console.error("Error fetching product:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };



// // ✅ CREATE new product
// exports.createProduct = async (req, res) => {
//   try {
//     const { name, price, category, description } = req.body;

//     // 🔹 Validation
//     if (!name || !price) {
//       return res.status(400).json({
//         success: false,
//         message: "Name and Price are required",
//       });
//     }

//     const newProduct = new Product({
//       name: name.trim(),
//       price,
//       category: category ? category.toLowerCase().trim() : "",
//       description: description ? description.trim() : "",
//       image: req.file ? req.file.filename : "",
//     });

//     const savedProduct = await newProduct.save();

//     res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       data: savedProduct,
//     });

//   } catch (error) {
//     console.error("Error creating product:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };





// const Product = require("../models/productModel");

// // GET all products
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, data: products });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// // GET single product
// exports.getSingleProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // CREATE product
// exports.createProduct = async (req, res) => {
//   try {
//     const { name, price, category, description } = req.body;
//     if (!name || !price) return res.status(400).json({ message: "Name and Price required" });

//     const newProduct = new Product({
//       name,
//       price,
//       category,
//       description,
//       image: req.file ? req.file.filename : "",
//     });

//     const saved = await newProduct.save();
//     res.status(201).json({ success: true, data: saved });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // UPDATE product
// exports.updateProduct = async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(
//       req.params.id,
//       { ...req.body, image: req.file ? req.file.filename : undefined },
//       { new: true }
//     );
//     res.json({ success: true, data: updated });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // DELETE product
// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: "Product deleted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };



const Product = require("../models/productModel");

// ✅ GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ GET single product
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.error("Error fetching product:", err);

    // Handle invalid ObjectId
    if (err.name === "CastError") {
      return res.status(400).json({ success: false, message: "Invalid Product ID" });
    }

    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ CREATE product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    if (!name || !price) {
      return res.status(400).json({ success: false, message: "Name and Price required" });
    }

    const newProduct = new Product({
      name: name.trim(),
      price,
      category: category ? category.trim().toLowerCase() : "",
      description: description ? description.trim() : "",
      image: req.file ? req.file.filename : "", // multer file
    });

    const saved = await newProduct.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ UPDATE product
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        image: req.file ? req.file.filename : undefined,
      },
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    console.error("Error updating product:", err);

    if (err.name === "CastError") {
      return res.status(400).json({ success: false, message: "Invalid Product ID" });
    }

    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (err) {
    console.error("Error deleting product:", err);

    if (err.name === "CastError") {
      return res.status(400).json({ success: false, message: "Invalid Product ID" });
    }

    res.status(500).json({ success: false, message: "Server Error" });
  }
};