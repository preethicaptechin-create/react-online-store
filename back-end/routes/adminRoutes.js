// // routes/admin.js
// const express = require("express");
// const Admin = require("../models/admin");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const router = express.Router();

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({ message: "Username and password are required" });
//   }
//   const admin = await Admin.findOne({ username });
//   if (!admin) return res.status(401).json({ message: "Invalid username" });

//   const isMatch = await bcrypt.compare(password, admin.password);
//   if (!isMatch) return res.status(401).json({ message: "Invalid password" });

//   const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//   res.json({ token });
// });

// module.exports = router;




const express = require("express");
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();


// ADMIN LOGIN
router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const admin = await Admin.findOne({ username });

  if (!admin) return res.status(401).json({ message: "Invalid username" });

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  const accessToken = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { id: admin._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    accessToken,
    refreshToken
  });
});


// REFRESH TOKEN ROUTE  👈 inga add pannaum
router.post("/refresh", (req, res) => {

  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token required" });
  }

  try {

    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({
      accessToken: newAccessToken
    });

  } catch (error) {
    res.status(403).json({ message: "Invalid refresh token" });
  }

});

module.exports = router;