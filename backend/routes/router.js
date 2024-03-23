const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {
  createTranscript,
  createSummary,
} = require("../controllers/mainController");

router.post("/create-transcript", asyncHandler(createTranscript));
// router.post("/create-summary", asyncHandler(createSummary));

module.exports = { router };
