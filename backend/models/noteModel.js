const mongoose = require("mongoose"); // Import mongoose to create a schema

// Create a schema for the user
const notesSchema = new mongoose.Schema(
  {
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    title: {
      type: String
    },
    structuredNote: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    cueQuestions: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

// Create a model for the user schema and export
module.exports = mongoose.model("Note", notesSchema);