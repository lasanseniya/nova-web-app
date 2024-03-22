const mongoose = require("mongoose"); // Import mongoose to create a schema

// Create a schema for the user
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username required"],
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
  },
  {
    timestamps: true,
  }
);

// Create a model for the user schema and export
module.exports = mongoose.model("UserModel", userSchema);
