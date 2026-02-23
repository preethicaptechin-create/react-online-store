// const Category = require("../models/categoryModel");

// // GET all categories
// exports.getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // CREATE category
// exports.createCategory = async (req, res) => {
//   try {
//     const { name } = req.body;

//     const newCategory = new Category({ name });
//     const savedCategory = await newCategory.save();

//     res.status(201).json(savedCategory);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



const Category = require("../models/categoryModel");

// ✅ GET all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ✅ CREATE category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // 🔹 Validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Category name is required",
      });
    }

    // 🔹 Check duplicate (case insensitive)
    const existingCategory = await Category.findOne({
      name: { $regex: `^${name}$`, $options: "i" },
    });

    if (existingCategory) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }

    const newCategory = new Category({
      name: name.trim(),
    });

    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};