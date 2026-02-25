// const express = require("express");
// const router = express.Router();

// const {
//   createUser,
//   getUsers
// } = require("../controllers/testController");

// router.post("/user", createUser);
// router.get("/users", getUsers);

// module.exports = router;



const express = require("express");
const router = express.Router();

// Make sure this path matches your file structure
const { createUser, getUsers } = require("../controllers/testController");

// Route to insert test user
router.post("/user", createUser);

// Route to fetch all users
router.get("/users", getUsers);

module.exports = router;