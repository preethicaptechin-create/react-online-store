const User = require("../models/user");
const Order = require("../models/Order");

// Insert test user
exports.createUser = async (req, res) => {
  const user = new User({
    name: "riya",
    email: "riya@gmail.com",
    password: "1234"
  });

  await user.save();
  res.json(user);
};

// Fetch users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
