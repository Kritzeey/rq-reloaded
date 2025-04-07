import express from "express";
import dotenv from "dotenv";
import quizRoutes from "./routes/quiz.route.js";

dotenv.config();
app = express();

app.use(express.json());

app.use("/api/quizzes", quizRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}/`);
});
