const express = require("express");

// Initialize express with router
const router = express.Router();

const cors = require("cors");

const validateToken = require("../middleware/validateToken");

const {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  verifyOTP,
  deleteOTP,
  resendOTP,
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

// endpoint: POST /forgot-password
router.post("/forgot-password", forgotPassword);

// endpoint: POST /reset-password
router.post("/reset-password", resetPassword);

// endpoint: POST /verify-otp
router.post("/verify-otp", verifyOTP);

// endpoint: POST /verify-otp
router.post("/resend-otp", resendOTP);

// endpoint: DELETE /delete-otp
router.delete("/delete-otp/:email", deleteOTP);

module.exports = router;
