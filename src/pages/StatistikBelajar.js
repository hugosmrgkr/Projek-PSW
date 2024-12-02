import React from "react";
import { useScore } from "../components/ScoreContext";

const StatistikBelajar = () => {
  const { score } = useScore();

  const getMotivationalMessage = (score) => {
    if (score >= 80) {
      return "Kerja bagus! Lanjutkan prestasimu!";
    } else if (score >= 50) {
      return "Kamu sudah di jalur yang benar! Terus belajar untuk hasil yang lebih baik.";
    } else {
      return "Jangan menyerah! Setiap usaha membawa kamu lebih dekat ke tujuan.";
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Statistik Belajar</h2>
      <p>
        Skor kuis terakhir Anda: <strong>{score}</strong>
      </p>
      <p style={{ fontStyle: "italic", color: "#6c757d" }}>{getMotivationalMessage(score)}</p>
    </div>
  );
};

export default StatistikBelajar;
