import express from "express";
import dotenv from "dotenv";
import quizRoutes from "./routes/quiz.route.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/quizzes", quizRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(
  app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}/`);
  })
);
