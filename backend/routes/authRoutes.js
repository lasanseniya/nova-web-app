const express = require("express");

// Initialize express with router
const router = express.Router();

const cors = require("cors");

const validateToken = require("../middleware/validateToken");

const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutuser,
} = require("../controllers/authController");

// Middleware for router
router.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

// endpoint: POST /register
router.post("/register", registerUser);

// endpoint: POST /login
router.post("/login", loginUser);

// endpoint: GET /profile
router.get("/profile", validateToken, getUserProfile);

// endpoint: POST /logout
router.post("/logout", logoutuser);

module.exports = router;
