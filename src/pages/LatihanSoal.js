import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";

const LatihanSoal = () => {
  const [questions] = useState([
    {
      text: "Jika f(x) = x² + 2x - 3, berapakah nilai f(2)?",
      options: ["5", "3", "1", "-1"],
      correctAnswer: "3",
    },
  ]);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) setScore(score + 1);
  };

  return (
    <div>
      <h2>Latihan Soal - Fungsi Kuadrat</h2>
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} handleAnswer={handleAnswer} />
      ))}
      <p>Skor: {score}</p>
    </div>
  );
};

export default LatihanSoal;
