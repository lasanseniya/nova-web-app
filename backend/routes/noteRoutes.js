const express = require("express");

// Initialize express with router
const router = express.Router();

const cors = require("cors");

const validateToken = require("../middleware/validateToken");

const {
  getNotes,
  // getNoteById,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

// Middleware for router
router.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

router.use(validateToken);

// endpoint: GET / retrieve notes
router.get("/", getNotes);

// endpoint: GET / get note by id
// router.get("/:id", getNoteById);

// endpoint: POST / create note
router.post("/", createNote);

// endpoint: PUT / update note
router.put("/:id", updateNote);

//endpoint: DELETE / delete note
router.delete("/:id", deleteNote);

module.exports = router;
