const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { hashPassword } = require("../helpers/auth");

/**
 * @desc   Register a new user
 * @route  POST /register
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  if (!username) {
    return res.json({ error: "Username is required" });
  }

  // Check if email is provided
  if (!email) {
    return res.json({ error: "Email is required" });
  }

  // Validate email
  const isEmailExist = await User.findOne({ email });

  if (isEmailExist) {
    return res.json({ error: "Email is already taken" });
  }

  // Check if password is valid
  if (!password || password.length < 6) {
    return res.json({
      error: "Password is required and should be at least 6 characters long",
    });
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create new user in mongoDB
  const user = await User.create({
    username,
    email,
    password: hashedPassword, // password is hashed before sending to DB
  });

  // Check if user is created
  if (user) {
    return res.json({ message: "Registration successful" });
  } else {
    return res.json({ error: "Registration failed" });
  }
});

module.exports = { registerUser };
