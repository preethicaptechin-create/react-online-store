// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");


// // ======================
// // REGISTER USER
// // ======================
// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//       user: newUser,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // ======================
// // LOGIN USER
// // ======================
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (!existingUser) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, existingUser.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const token = jwt.sign(
//       { id: existingUser._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };





const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Helper: Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// ======================
// REGISTER USER
// ======================
exports.registerUser = async (req, res) => {
  try {
    // ✅ Destructure request body
    const { name, email, password } = req.body;
    console.log("Register body:", req.body);

    // 🔹 Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    // 🔹 Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 🔹 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // ✅ Return user info + token
    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(newUser._id),
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

// ======================
// LOGIN USER
// ======================
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login body:", req.body);

    // 🔹 Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 🔹 Find user
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 🔹 Check password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 🔹 JWT secret check
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT secret not configured" });
    }

    // 🔹 Generate token
    const token = generateToken(existingUser._id);

    // ✅ Return user info + token
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};