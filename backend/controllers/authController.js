const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

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
const loginUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body;

  // Check whether the user exists
  const user = await User.findOne({email});

  if (!user){
    return res.json({error: "User not found!"});
  }

  // Check whether the password is correct
  const isPasswordMatch = await comparePassword(password, user.password);

  if (isPasswordMatch) {
    // Create a json web token
    jwt.sign(
      {email: user.email, id: user._id,username: user.username},
      process.env.ACCESS_TOKEN_SECRET, {}, (err, token) => {
        if (err) throw err;

        // Send the token inside a cookie
        res.cookie("token", token).json(user);
      }
    );
  } else {
    res.json ({error: "Invalid Password!"});
  }
});


module.exports = { registerUser, loginUser };
