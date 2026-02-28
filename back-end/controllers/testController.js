// const User = require("../models/User");
// const Order = require("../models/Order");

// // Insert test user
// exports.createUser = async (req, res) => {
//   const user = new User({
//     name: "riya",
//     email: "riya@gmail.com",
//     password: "1234"
//   });

//   await user.save();
//   res.json(user);
// };

// // Fetch users
// exports.getUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };


// Make sure file names match exactly in your /models folder
const User = require("../models/user");   // lowercase, match your actual file
const Order = require("../models/orderModel"); // lowercase, match your actual file

// Insert test user
exports.createUser = async (req, res) => {
  try {
    const user = new User({
      name: "Riya",
      email: "riya@gmail.com",
      password: "1234", // for test only, normally hash password
    });

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};