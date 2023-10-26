const express = require("express");
const protect = require("../middleware/authMiddleWare");

const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
router.route("/");
module.exports = router;
