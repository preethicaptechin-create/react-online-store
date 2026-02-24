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
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authContoller"); // ✅ fixed typo
const { protect } = require("../middleware/authMiddleware"); // ✅ middleware for protected routes

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route example
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    user: req.user, // 👈 req.user set by authMiddleware
  });
});

module.exports = router;