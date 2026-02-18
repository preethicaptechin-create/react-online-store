const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers
} = require("../controllers/testController");

router.post("/user", createUser);
router.get("/users", getUsers);

module.exports = router;
