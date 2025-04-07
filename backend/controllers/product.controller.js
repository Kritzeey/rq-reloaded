import Quiz from "../models/product.model.js";

export async function fetchQuizzes(req, res) {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).json({
      success: true,
      message: "Quizzes fetched successfully",
      data: quizzes,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Error fetching quizzes" });
  }
}

export async function fetchQuiz(req, res) {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);
    res.status(200).json({
      success: true,
      message: "Quiz fetched successfully",
      data: quiz,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Error fetching quiz" });
  }
}

export async function createQuiz(req, res) {
  const quiz = req.body;

  if (!quiz.title) {
    return res
      .status(400)
      .json({ success: false, message: "Quiz title cannot be blank" });
  }

  const newQuiz = new Quiz(quiz);

  try {
    await newQuiz.save();
    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
      data: newQuiz,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Error creating quiz" });
  }
}

export async function updateQuiz(req, res) {
  const { id } = req.params;

  const quiz = req.body;

  if (!quiz.title) {
    return res
      .status(400)
      .json({ success: false, message: "Quiz title cannot be blank" });
  }

  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(id, quiz, { new: true });
    res.status(200).json({
      success: true,
      message: "Quiz updated successfully",
      data: updatedQuiz,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Error updating quiz" });
  }
}

export async function deleteQuiz(req, res) {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Quiz deleted successfully",
      data: quiz,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Error deleting quiz" });
  }
}
