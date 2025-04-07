import express from "express";
import dotenv from "dotenv";

dotenv.config();
app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}/`);
});
