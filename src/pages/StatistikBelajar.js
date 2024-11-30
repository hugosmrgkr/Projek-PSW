import React from "react";
import { useScore } from "../components/ScoreContext"; 

const StatistikBelajar = () => {
  const { score } = useScore();

  return (
    <div>
      <h2>Statistik Belajar</h2>
      <p>Skor kuis terakhir Anda: {score}</p>
    </div>
  );
};

export default StatistikBelajar;
