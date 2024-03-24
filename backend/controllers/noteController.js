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