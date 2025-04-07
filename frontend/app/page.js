"use client";

import Particles from "@/components/Particles";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  async function fetchQuizzes() {
    const quizzes = await axios.get("http://localhost:5000/api/quizzes");
    setQuizzes(quizzes);
  }

  useEffect(() => {
    fetchQuizzes();
  });

  console.log(quizzes);

  return (
    <div className="h-screen absolute top-0 w-full">
      <div className="text-center justify-center items-center relative z-50 top-0 pt-20 max-w-6xl w-full mx-auto flex">
        Available Quizzes
      </div>

      <div className="h-full w-full absolute top-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
    </div>
  );
}
