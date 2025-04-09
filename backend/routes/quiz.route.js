import express from "express";
import {
  fetchQuizzes,
  fetchQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  fetchQuizByName,
} from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/", fetchQuizzes);
router.get("/:title", fetchQuizByName);
router.get("/:id", fetchQuiz);

router.post("/", createQuiz);

router.put("/:id", updateQuiz);

router.delete("/:id", deleteQuiz);

export default router;
