"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export default function Create() {
  const [newQuiz, setNewQuiz] = useState({
    title: "",
    description: "",
    image: "",
  });

  async function addQuiz(quiz) {
    if (!newQuiz.title) {
      return { success: false, message: "Quiz title cannot be blank" };
    }

    const response = await axios.post(
      "http://localhost:5000/api/quizzes",
      newQuiz
    );

    return { success: true, message: "Product created successfully" };
  }

  async function createQuiz(e) {
    e.preventDefault();

    const { success, message } = await addQuiz(newQuiz);

    if (!success) {
      toast(message);
    } else {
      toast(message);
    }

    setNewQuiz({ title: "", description: "", image: "" });
  }

  return (
    <div className="w-full max-w-4xl p-4 border-1 rounded-sm mt-4 mx-auto">
      <form onSubmit={createQuiz} className="w-full">
        <div className="font-semibold text-center text-4xl">Create Quiz</div>
        <div className="mt-4">
          <Label htmlFor="title">Quiz title*</Label>
          <Input
            id="title"
            placeholder="Enter quiz title"
            className="mt-2"
            onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
            value={newQuiz.title}
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Enter quiz description"
            className="mt-2"
            onChange={(e) =>
              setNewQuiz({ ...newQuiz, description: e.target.value })
            }
            value={newQuiz.description}
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            placeholder="Enter image URL"
            className="mt-2"
            onChange={(e) => setNewQuiz({ ...newQuiz, image: e.target.value })}
            value={newQuiz.image}
          />
        </div>
        <div className="w-full mt-8 flex justify-end">
          <Button type="submit" className="mt-4">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
