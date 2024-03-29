const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

  // Validate email via checking if it's already in DB
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

/**
 * @desc   Login user
 * @route  POST /login
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check whether the user exists
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "User not found!" });
  }

  // Check whether the password is correct
  const isPasswordMatch = await comparePassword(password, user.password);

  if (isPasswordMatch) {
    // Create a json web token
    const token = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    // Send the token as a json response
    res.json({ token });
  } else {
    res.json({ error: "Invalid Password!" });
  }
});

// Get user profile
const getUserProfile = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {}, (err, user) => {
      if (err) throw err;
      console.log(user);
      res.json(user);
    });
  } else {
    res.json({ error: "No token found" });
  }
};

/**
 * @desc   Forgot password
 * @route  POST /forgot-password
 * @access Public
 */
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Check if the user's email exist in the DB
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "User not found, please register first!" });
  }

  // IF user exists
  // Create a reset password token
  const resetToken = jwt.sign(
    {
      user: {
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );

  // Send email to user with the reset password link
  const transporter = nodemailer.createTransport({
    // senders email and password
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email data to be sent
  const emailData = {
    from: `Nova study notes ${process.env.EMAIL_FROM}`,
    to: email,
    subject: "Password Reset Link for Nova web app",
    html: `
      <h1>Please use the following link to reset your password</h1>
      <a href=${process.env.FRONTEND_URL}/password-reset/${resetToken}> Reset here </a>
      <hr />
    `,
  };

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      return res.json({ error: err.message });
    }

    return res.json({ message: `Email has been sent to ${email}`, resetToken });
  });
});

module.exports = { registerUser, loginUser, getUserProfile, forgotPassword };
