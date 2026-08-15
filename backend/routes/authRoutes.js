const express = require("express");

const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { registerUser , loginUser,getCurrentUser,changePassword} = require("../controllers/authController");
const validateRegister = require("../middleware/validateRegister");

router.post("/register", validateRegister, registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getCurrentUser);
router.put("/change-password", protect, changePassword);

module.exports = router;