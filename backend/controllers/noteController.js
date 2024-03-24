const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

/**
 * @desc Get notes
 * @route GET /api/notes
 * @access Private
 */
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user_id: req.user.id });
  res.json(notes);
});

/**
 * @desc   Create a new note
 * @route  POST /notes
 * @access Private
 */
const createNote = asyncHandler(async (req, res) => {
  const { title, structuredNote, summary, cueQuestions } = req.body;

  // Set default title if not provided by the user or if it's empty
  const defaultTitle = title
    ? title
    : `Unknown ${(await Note.countDocuments({ user_id: req.user.id })) + 1}`;

  const isTitleExist = await Note.findOne({ title, user_id: req.user.id });

  if (isTitleExist) {
    // Send an error message if the note title already exists
    return res.json({ error: "Note title already exists 😑" });
  }

  // Check if the user has provided all the required fields
  if (!structuredNote) {
    return res.json({ error: "Structured note is empty" });
  }

  if (!summary) {
    return res.json({ error: "Summary is empty" });
  }

  if (!cueQuestions) {
    return res.json({ error: "Cue questions are empty" });
  }

  // Create a new note
  const note = await Note.create({
    user_id: req.user.id,
    title: defaultTitle,
    structuredNote,
    summary,
    cueQuestions,
  });

  if (!note) {
    res.json({ error: "Note creation failed ❌" });
  }

  res.json({ message: "Note saved! 🫡" });
});

module.exports = { getNotes, createNote };
