

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.protect = async (req, res, next) => {
//   let token;

//   // ✅ Check for token in Authorization header
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Extract token
//       token = req.headers.authorization.split(" ")[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Attach user to request object (exclude password)
//       req.user = await User.findById(decoded.id).select("-password");

//       next(); // Pass control to next middleware/controller
//     } catch (error) {
//       console.error("Auth middleware error:", error);
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   // ✅ If no token provided
//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token provided" });
//   }
// };



// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       const user = await User.findById(decoded.id).select("-password");

//       if (!user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       req.user = user;
//       next();

//     } catch (error) {
//       console.error("Auth middleware error:", error);

//       // 🔥 Token expired
//       if (error.name === "TokenExpiredError") {
//         return res.status(401).json({
//           message: "Access token expired",
//           expired: true,   // frontend auto refresh ku use aagum
//         });
//       }

//       // 🔥 Invalid token
//       return res.status(401).json({
//         message: "Invalid token",
//       });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({
//       message: "Not authorized, no token provided",
//     });
//   }
// };




const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.protect = async (req, res, next) => {
  // 🔹 Early return if no Authorization header
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res.status(401).json({
      message: "Not authorized, no token provided",
    });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    console.error("Auth middleware error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Access token expired",
        expired: true, // frontend auto-refresh ku use aagum
      });
    }

    return res.status(401).json({
      message: "Invalid token",
    });
  }
};