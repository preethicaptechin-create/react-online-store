// const express = require("express");
// const router = express.Router();
// const { registerUser, loginUser } = require("../controllers/authContoller");


// router.post("/register", registerUser);
// router.post("/login", loginUser);

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { registerUser, loginUser } = require("../controllers/authContoller");
// const { protect } = require("../middleware/authMiddleware"); // 👈 add this

// router.post("/register", registerUser);
// router.post("/login", loginUser);

// // 👇 Add this route
// router.get("/profile", protect, (req, res) => {
//   res.json({
//     message: "Profile accessed",
//     user: req.user,
//   });
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const { registerUser, loginUser } = require("../controllers/authContoller"); // ✅ fixed typo
// const { protect } = require("../middleware/authMiddleware"); // ✅ middleware for protected routes

// // Public routes
// router.post("/register", registerUser);
// router.post("/login", loginUser);

// // Protected route example
// router.get("/profile", protect, (req, res) => {
//   res.status(200).json({
//     message: "Profile accessed successfully",
//     user: req.user, // 👈 req.user set by authMiddleware
//   });
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const { registerUser, loginUser } = require("../controllers/authContoller");
// const { protect } = require("../middleware/authMiddleware");

// // ✅ In-memory refresh token store (for demo; replace with DB in production)
// let refreshTokens = [];

// // ------------------------
// // Public routes
// // ------------------------

// // Register new user
// router.post("/register", registerUser);

// // Login user
// router.post("/login", async (req, res, next) => {
//   try {
//     const data = await loginUser(req, res); // your login controller returns { user, accessToken, refreshToken }
    
//     // Save refresh token in memory
//     if (data.refreshToken) refreshTokens.push(data.refreshToken);

//     // Return data to frontend
//     res.json(data);
//   } catch (error) {
//     next(error);
//   }
// });

// // Logout user
// router.post("/logout", (req, res) => {
//   const { token } = req.body;

//   if (!token) return res.status(400).json({ message: "No token provided" });

//   // Remove token from refreshTokens array
//   refreshTokens = refreshTokens.filter(t => t !== token);

//   res.json({ message: "Logged out successfully ✅" });
// });

// // ------------------------
// // Protected routes
// // ------------------------
// router.get("/profile", protect, (req, res) => {
//   res.status(200).json({
//     message: "Profile accessed successfully",
//     user: req.user,
//   });
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const { registerUser, loginUser, logoutUser } = require("../controllers/authContoller");
// const { protect } = require("../middleware/authMiddleware");

// // ------------------------
// // Public routes
// // ------------------------

// // Register new user
// router.post("/register", registerUser);

// // Login user
// router.post("/login", loginUser);

// // Logout user
// router.post("/logout", logoutUser); // frontend sends { refreshToken } in body

// // ------------------------
// // Protected routes
// // ------------------------
// router.get("/profile", protect, (req, res) => {
//   res.status(200).json({
//     message: "Profile accessed successfully",
//     user: req.user,
//   });
// });

// module.exports = router;




// backend/routes/authRoutes.js




// routes/orderRoutes.js
// const express = require("express");
// const Order = require("../models/orderModel");
// const { protect } = require("../middleware/authMiddleware"); // your auth middleware

// const router = express.Router();

// router.post("/", protect, async (req, res) => {
//   try {
//     const { items, total, firstName, lastName, address, mobile, paymentMethod } = req.body;

//     if (!items || !items.length) return res.status(400).json({ message: "Cart is empty" });

//     const order = new Order({
//       user: req.user._id,
//       items,
//       total,
//       firstName,
//       lastName,
//       address,
//       mobile,
//       paymentMethod,
//     });

//     await order.save();

//     res.status(201).json({ _id: order._id });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to place order" });
//   }
// });

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const User = require("../models/user"); 
// const bcrypt = require("bcryptjs");

// // Register
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword });
//     res.status(201).json({ _id: user._id, name: user.name, email: user.email });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
//     const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

//     res.json({ accessToken, refreshToken, user: { _id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Profile (Protected)
// const { protect } = require("../middleware/authMiddleware");
// router.get("/profile", protect, async (req, res) => {
//   res.json({ _id: req.user._id, name: req.user.name, email: req.user.email });
// });

// // Refresh token
// router.post("/refresh-token", async (req, res) => {
//   const { refreshToken } = req.body;
//   if (!refreshToken) return res.status(401).json({ message: "No refresh token" });

//   try {
//     const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
//     const accessToken = jwt.sign({ id: payload.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
//     res.json({ accessToken });
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ message: "Invalid refresh token" });
//   }
// });

// module.exports = router;






const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// ================= REGISTER =================
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.post("/register", async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    if (!name || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      lastName, // ✅ IMPORTANT ADD THIS
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: err.message });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ STORE refresh token in DB
    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      accessToken,
      refreshToken,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= LOGOUT =================
router.post("/logout", async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(400).json({ message: "Refresh token required" });

  try {
    const user = await User.findOne({ refreshToken });

    if (!user)
      return res.status(404).json({ message: "User not found" });

    // ✅ REMOVE refresh token from DB
    user.refreshToken = null;
    await user.save();

    res.json({ message: "Logged out successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= REFRESH TOKEN =================
router.post("/refresh-token", async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(401).json({ message: "No refresh token" });

  try {
    const user = await User.findOne({ refreshToken });
    if (!user)
      return res.status(403).json({ message: "Invalid refresh token" });

    const payload = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );

    const accessToken = jwt.sign(
      { id: payload.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken });

  } catch (err) {
    console.error(err);
    res.status(403).json({ message: "Invalid refresh token" });
  }
});

// ================= PROFILE =================
const { protect } = require("../middleware/authMiddleware");

router.get("/profile", protect, async (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  });
});

module.exports = router;