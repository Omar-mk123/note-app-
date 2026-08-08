const express = require("express");
const router = express.Router();

const {
  createNote,
  getAllNotes,
  getPublicNotes,
  searchNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

const { protect } = require("../middleware/auth");

// Create Note
router.post("/", protect, createNote);

// Get Public Notes
router.get("/public", getPublicNotes);


// Search Public Notes
router.get("/search", searchNotes);


// Get User Notes
router.get("/", protect, getAllNotes);

// Get Single Note
router.get("/:id", protect, getNoteById);

// Update Note
router.put("/:id", protect, updateNote);

// Delete Note
router.delete("/:id", protect, deleteNote);


module.exports = router;
