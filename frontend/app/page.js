"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  async function fetchQuizzes() {
    const quizzes = await axios.get("http://localhost:5000/api/quizzes");
    setQuizzes(quizzes.data.data);
  }

  async function filterQuizzes(e) {
    if (!e.trim() || !e) {
      const quizzes = await axios.get("http://localhost:5000/api/quizzes");
      setQuizzes(quizzes.data.data);
    }

    const filteredQuizzes = [];

    const quiz = await axios.get(
      `http://localhost:5000/api/quizzes/${e.trim()}`
    );

    filteredQuizzes.push(quiz.data.data);

    setQuizzes(filteredQuizzes[0]);
  }

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 h-full w-full mx-auto max-w-6xl">
      <div className="h-full col-span-1">
        <Sidebar handleChange={filterQuizzes} />
      </div>
      <div className="gap-4 z-50 w-full grid col-span-3 grid-cols-3">
        {quizzes.length !== 0 ? (
          quizzes.map((quiz) => (
            <Card key={quiz._id} title={quiz.title} image={quiz.image} />
          ))
        ) : (
          <div className="col-span-3 mt-4 flex items-center justify-center z-50">
            No quizzes found!
          </div>
        )}
      </div>
    </div>
  );
}
