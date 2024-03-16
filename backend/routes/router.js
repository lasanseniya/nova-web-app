const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {createTranscript,getTranscript,createSummary} = require("../controllers/mainController")

router.post("/create-transcript", createTranscript);
router.get("/get-transcript", getTranscript);
router.post("/create-summary", createSummary);

module.exports = { router };
