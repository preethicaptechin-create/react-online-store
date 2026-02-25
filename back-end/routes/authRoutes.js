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
const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, refreshToken } = require("../controllers/authContoller");
const { protect } = require("../middleware/authMiddleware");

// ------------------------
// Public routes
// ------------------------

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Logout user
router.post("/logout", logoutUser); // frontend sends { refreshToken } in body

// Refresh access token
router.post("/refresh-token", refreshToken); // frontend calls this if access token expired

// Optional: simple protected check route
router.get("/protected", protect, (req, res) => {
  res.status(200).json({ message: "Protected route ok ✅", user: req.user });
});

// ------------------------
// Protected routes
// ------------------------
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully ✅",
    user: req.user,
  });
});

module.exports = router;