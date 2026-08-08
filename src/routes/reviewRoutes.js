const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

const {
  createReview,
  getReviewsByNote,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

router.post("/notes/:noteId/reviews", protect, createReview);

router.get("/notes/:noteId/reviews", protect, getReviewsByNote);

router.get("/reviews/:id", protect, getReviewById);

router.put("/reviews/:id", protect, updateReview);

router.delete("/reviews/:id", protect, deleteReview);

module.exports = router;
