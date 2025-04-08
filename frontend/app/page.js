"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  async function fetchQuizzes() {
    const quizzes = await axios.get("http://localhost:5000/api/quizzes");
    setQuizzes(quizzes.data.data);
  }

  useEffect(() => {
    fetchQuizzes();
  }, []);

  console.log(quizzes);

  return (
    <div className="gap-4 z-50 w-full grid grid-cols-3">
      {quizzes.map((quiz) => (
        <Card key={quiz._id} title={quiz.title} image={quiz.image} />
      ))}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
