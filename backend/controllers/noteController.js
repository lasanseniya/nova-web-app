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

  if (!title) {
    // assign a default title with count of notes
    title = "unknown";
  }

  const isTitleExist = await Note.findOne({ title, user_id: req.user.id });

  if (isTitleExist) {
    return res.json({ error: "Note title already exists" });
  }

  // Create a new note
  const note = await Note.create({
    user_id: req.user.id,
    title,
    structuredNote,
    summary,
    cueQuestions,
  });

  res.json(note);
});

module.exports = { getNotes, createNote };
