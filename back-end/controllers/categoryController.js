const Category = require("../models/categoryModel");

// GET all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = new Category({ name });
    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};