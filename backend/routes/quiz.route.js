import express from "express";
import {
  fetchQuizzes,
  fetchQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", fetchQuizzes);
router.get("/:id", fetchQuiz);

router.post("/", createQuiz);

router.put("/:id", updateQuiz);

router.delete("/:id", deleteQuiz);

export default router;
