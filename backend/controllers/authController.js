const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const OTPModel = require("../models/OTPModel");
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

  // Send email to user with the reset password link
  const transporter = nodemailer.createTransport({
    // senders email and password
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Generate OTP at random
  const OTP = Math.floor(100000 + Math.random() * 900000);

  // Email data to be sent
  const emailData = {
    from: `Nova study notes ${process.env.EMAIL_FROM}`,
    to: email,
    subject: "Password Reset Link from Nova",
    html: `
      <div style = "background: linear-gradient(180deg, #001125 0%, #002755 100%); padding: 50px">
      <div style= "padding: 20px;">
      <h1 style="color: white;"> Hey there! </h1>
      </ br>
      <h3 style="color:white;"> Use this code to reset your password and get back on your study notes. </h3>
      <p style="color: #B4B4B8"> If you didn't request for an OTP, you can safely ignore it </p>
      </ br>
      </div>
      <div style="padding: 20px;">
      <span style="color:#0F0F0F; font-size: 40px; font-family: Lucida Console; background-color: #5CB1FF; border-radius: 10px; padding: 20px;">
      ${OTP}
      </span>
      </div>
      </div>
    `,
  };

  // store the OTP in the DB
  const otp = await OTPModel.create({
    email,
    code: OTP,
  });

  if (!otp) {
    return res.json({ error: "Cannot generate OTP" });
  }

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      return res.json({ error: err.message });
    }

    return res.json({ message: `Email has been sent to ${email}` });
  });
});

/**
 * @desc   verify OTP
 * @route  POST /verify-otp
 * @access Public
 */
const verifyOTP = asyncHandler(async (req, res) => {
  const { email, code } = req.body;

  // Check if the OTP exists in the DB
  const OTP = await OTPModel.findOne({ email, code });

  if (!OTP) {
    return res.json({ error: "Invalid OTP" });
  }

  // did not check if the OTp has expired

  res.json({ message: "OTP verified successfully!" });
});

/**
 * @desc delete OTP
 * @route DELETE /delete-otp/:email
 * @access Public
 */
const deleteOTP = asyncHandler(async (req, res) => {
  const email = req.params.email;

  // Check if the OTP exists in the DB
  const maxRetries = 3;

  // Function to attempt OTP deletion with retries
  const deleteOTP = async (attempt) => {
    try {
      const OTP = await OTPModel.findOneAndDelete({ email });
      console.log(`OTP: ${OTP}`); //-------- DEBUGGING
    } catch (error) {
      console.error(`Error deleting OTP on attempt ${attempt}:`, error);
      if (attempt < maxRetries) {
        // Wait a short time before retrying
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return deleteOTP(attempt + 1);
      } else {
        throw new Error("Failed to delete OTP after multiple retries");
      }
    }
  };

  // Call the retry function for OTP deletion
  let deletedOTP;
  try {
    deletedOTP = await deleteOTP(1); // Start with attempt 1
    console.log(`deleted OTP: ${deletedOTP}`);
  } catch (error) {
    console.error("Error deleting OTP:", error);
    return res.json({ error: "Failed to resend OTP" });
  }

  // deletion success
  if (deletedOTP === undefined) {
    return res.json({ message: "OTP removed" });
  }
});

/**
 * @desc Resend OTP
 * @route POST / resend
 * @access public
 */
const resendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;

  console.log(`email: ${email}`); //------ DEBUGGING

  // delete the existing otp
  // Define the maximum number of retries
  const maxRetries = 3;

  // Function to attempt OTP deletion with retries
  const deleteOTP = async (attempt) => {
    try {
      const OTP = await OTPModel.findOneAndDelete({ email });
      console.log(OTP); //-------- DEBUGGING
    } catch (error) {
      console.error(`Error deleting OTP on attempt ${attempt}:`, error);
      if (attempt < maxRetries) {
        // Wait a short time before retrying
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return deleteOTP(attempt + 1);
      } else {
        throw new Error("Failed to delete OTP after multiple retries");
      }
    }
  };

  // Call the retry function for OTP deletion
  let deletedOTP;
  try {
    deletedOTP = await deleteOTP(1); // Start with attempt 1
  } catch (error) {
    console.error("Error deleting OTP:", error);
    return res.json({ error: "Failed to resend OTP" });
  }

  // create a new one and store in DB
  // Send email to user with the reset password link
  const transporter = nodemailer.createTransport({
    // senders email and password
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Generate OTP at random
  const newOTP = Math.floor(100000 + Math.random() * 900000);

  // Email data to be sent
  const emailData = {
    from: `Nova study notes ${process.env.EMAIL_FROM}`,
    to: email,
    subject: "Password Reset Link from Nova",
    html: `
      <div style = "background: linear-gradient(180deg, #001125 0%, #002755 100%); padding: 50px">
      <div style= "padding: 20px;">
      <h1 style="color: white;"> Hey there! </h1>
      </ br>
      <h3 style="color:white;"> Use this code to reset your password and get back on your study notes. </h3>
      <p style="color: #B4B4B8"> If you didn't request for an OTP, you can safely ignore it </p>
      </ br>
      </div>
      <div style="padding: 20px;">
      <span style="color:#0F0F0F; font-size: 40px; font-family: Lucida Console; background-color: #5CB1FF; border-radius: 10px; padding: 20px;">
      ${newOTP}
      </span>
      </div>
      </div>
    `,
  };

  // store the OTP in the DB
  const otp = await OTPModel.create({
    email,
    code: newOTP,
  });

  if (!otp) {
    return res.json({ error: "Cannot generate OTP" });
  }

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      return res.json({ error: err.message });
    }

    return res.json({ message: `OTP has been sent 📨` });
  });
});

/**
 * @desc   Reset password
 * @route  POST /reset-password
 * @access Public
 */
const resetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  const user = await User.findOne({ email });

  // Hash the new password
  const hashedPassword = await hashPassword(password);

  // Update the user's password
  user.password = hashedPassword;
  await user.save();

  res.json({ message: "Password reset successful!" });
});

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  verifyOTP,
  deleteOTP,
  resendOTP,
};
