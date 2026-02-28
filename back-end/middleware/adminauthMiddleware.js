// const jwt = require("jsonwebtoken");
// const Admin = require("../models/admin");

// module.exports = async function adminAuth(req, res, next) {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1];

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const admin = await Admin.findById(decoded.id);

//     if (!admin || admin.role !== "admin") {
//       return res.status(403).json({ message: "Admin access only" });
//     }

//     req.admin = admin;
//     next();
//   } catch (err) {
//     console.error("Admin auth error:", err.message);
//     return res.status(401).json({ message: "Token invalid or expired" });
//   }
// };



const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

module.exports = async function adminAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token safely
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const admin = await Admin.findById(decoded.id);

    if (!admin || admin.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }

    req.admin = admin; // attach admin to request
    next();
  } catch (err) {
    console.error("Admin auth error:", err.message);
    return res.status(500).json({ message: "Server error in admin auth" });
  }
};