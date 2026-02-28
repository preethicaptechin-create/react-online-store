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





// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// // Helper: Generate JWT token
// // 🔹 Access Token (short time)
// const generateAccessToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//     expiresIn: "15m",
//   });
// };

// // 🔹 Refresh Token (long time)
// const generateRefreshToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
//     expiresIn: "7d",
//   });
// };

// // ======================
// // REGISTER USER
// // ======================
// exports.registerUser = async (req, res) => {
//   try {
//     // ✅ Destructure request body
//     const { name, email, password } = req.body;
//     console.log("Register body:", req.body);

//     // 🔹 Basic validation
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({
//         message: "Password must be at least 6 characters",
//       });
//     }

//     // 🔹 Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // 🔹 Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // 🔹 Create new user
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // ✅ Return user info + token
//     res.status(201).json({
//       message: "User registered successfully",
//       token: generateToken(newUser._id),
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//     });

//   } catch (error) {
//     console.error("Register error:", error);
//     res.status(500).json({
//       message: "Server error",
//     });
//   }
// };

// // ======================
// // LOGIN USER
// // ======================
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log("Login body:", req.body);

//     // 🔹 Validation
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     // 🔹 Find user
//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // 🔹 Check password
//     const isMatch = await bcrypt.compare(password, existingUser.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // 🔹 JWT secret check
//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({ message: "JWT secret not configured" });
//     }

//     // 🔹 Generate token
//     const token = generateToken(existingUser._id);

//     // ✅ Return user info + token
//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: existingUser._id,
//         name: existingUser.name,
//         email: existingUser.email,
//       },
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };




// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// // 🔹 Access Token (short time)
// const generateAccessToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//     expiresIn: "15m",
//   });
// };

// // 🔹 Refresh Token (long time)
// const generateRefreshToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
//     expiresIn: "7d",
//   });
// };

// // ======================
// // REGISTER USER
// // ======================
// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     console.log("Register body:", req.body);

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({
//         message: "Password must be at least 6 characters",
//       });
//     }

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

//     // 🔹 Generate tokens
//     const accessToken = generateAccessToken(newUser._id);
//     const refreshToken = generateRefreshToken(newUser._id);

//     // 🔹 Save refresh token
//     newUser.refreshToken = refreshToken;
//     await newUser.save();

//     res.status(201).json({
//       message: "User registered successfully",
//       accessToken,
//       refreshToken,
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//     });

//   } catch (error) {
//     console.error("Register error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ======================
// // LOGIN USER
// // ======================
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log("Login body:", req.body);

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, existingUser.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({ message: "JWT secret not configured" });
//     }

//     // 🔹 Generate tokens
//     const accessToken = generateAccessToken(existingUser._id);
//     const refreshToken = generateRefreshToken(existingUser._id);

//     // 🔹 Save refresh token
//     existingUser.refreshToken = refreshToken;
//     await existingUser.save();

//     res.status(200).json({
//       message: "Login successful",
//       accessToken,
//       refreshToken,
//       user: {
//         id: existingUser._id,
//         name: existingUser.name,
//         email: existingUser.email,
//       },
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ======================
// // REFRESH ACCESS TOKEN
// // ======================
// exports.refreshToken = async (req, res) => {
//   try {
//     const { refreshToken } = req.body;

//     if (!refreshToken) {
//       return res.status(401).json({ message: "No refresh token provided" });
//     }

//     const user = await User.findOne({ refreshToken });
//     if (!user) {
//       return res.status(403).json({ message: "Invalid refresh token" });
//     }

//     jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err) => {
//       if (err) {
//         return res.status(403).json({ message: "Refresh token expired" });
//       }

//       const newAccessToken = generateAccessToken(user._id);

//       res.status(200).json({ accessToken: newAccessToken });
//     });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ======================
// // LOGOUT USER
// // ======================
// exports.logoutUser = async (req, res) => {
//   try {
//     const { refreshToken } = req.body;

//     const user = await User.findOne({ refreshToken });

//     if (user) {
//       user.refreshToken = null;
//       await user.save();
//     }

//     res.status(200).json({ message: "Logged out successfully" });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };    





const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user");
const sendEmail = require("../utils/sendEmail");

// ======================
// TOKEN HELPERS
// ======================
const generateAccessToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "15m" });

const generateRefreshToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
// ======================
// REGISTER USER
// ======================
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// LOGIN USER
// ======================
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// REFRESH TOKEN
// ======================
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    const user = await User.findOne({ refreshToken });
    if (!user) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err) => {
      if (err) {
        return res.status(403).json({ message: "Refresh token expired" });
      }

      const newAccessToken = generateAccessToken(user._id);
      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// LOGOUT USER
// ======================
exports.logoutUser = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: "No refresh token provided" });
    }

    const user = await User.findOne({ refreshToken });

    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// FORGOT PASSWORD
// ======================

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // 1️⃣ Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2️⃣ Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // 3️⃣ Hash the token and save in user
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // 15 minutes expiry
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    await user.save();

    // 4️⃣ Return the reset link in response (instead of sending email)
    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;
    console.log("RESET LINK 👉", resetLink); // optional for backend console

    res.status(200).json({
      message: "Password reset link generated ✅",
      resetLink, // send link in response
    });

  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// RESET PASSWORD
// ======================
exports.resetPassword = async (req, res) => {
  try {
    const resetToken = req.params.token;
    const { password } = req.body;

    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Token is invalid or expired" });

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
