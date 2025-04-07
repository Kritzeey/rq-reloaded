import express from "express";
import {
  fetchQuizzes,
  fetchQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/");
router.get("/:id");

router.post("/");

router.put("/:id");

router.delete("/:id");

export default router;
