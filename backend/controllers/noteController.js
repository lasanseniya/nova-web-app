const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");
const { json } = require("express");

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

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.json({ error: "Note not found" });
  }
  if (note.user_id && note.user_id.toString() !== req.user.id) {
    res.json({
      error: "User don't have permission to update other user notes",
    });
  }
  await Note.deleteOne({ _id: req.params.id });
  res.json(note);
});

/** 
@desc Update Note
@route PUT /api/notes/:id
@access private
*/
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.json({error:"Note is not found 😑"});
  }

  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedNote);
});
module.exports = { getNotes, createNote, deleteNote, updateNote };
