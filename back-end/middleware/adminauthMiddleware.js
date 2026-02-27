const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

module.exports = async function adminAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) return res.status(401).json({ message: "Not authorized" });

    req.admin = admin;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalid" });
  }
};