import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useScore } from "../components/ScoreContext";

const StatistikBelajar = () => {
  const { score } = useScore();
  const location = useLocation(); // Mendapatkan state dari navigasi
  const [message, setMessage] = useState("");
  const [animate, setAnimate] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const getMotivationalMessage = (score) => {
      if (score >= 80) {
        return "Kerja bagus! Lanjutkan prestasimu! Kamu adalah inspirasi untuk orang lain.";
      } else if (score >= 50) {
        return "Kamu sudah di jalur yang benar! Terus belajar dan raihlah bintang-bintang di langit.";
      } else {
        return "Jangan menyerah! Setiap langkah kecil adalah awal menuju kesuksesan besar.";
      }
    };

    setMessage(getMotivationalMessage(score));
    setAnimate(true);

    // Ambil jawaban salah dari state navigasi jika tersedia
    if (location.state && location.state.wrongAnswers) {
      setIncorrectAnswers(location.state.wrongAnswers);
    }

    // Reset animasi setelah selesai
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [score, location.state]);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#e3f2fd", // Warna background biru muda
        borderRadius: "15px",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2 style={{ color: "#1565c0", fontSize: "26px", marginBottom: "20px", fontWeight: "600" }}>
        Statistik Belajar
      </h2>
      <p style={{ fontSize: "20px", marginBottom: "15px", color: "#1e88e5", fontWeight: "500" }}>
        Skor kuis terakhir Anda: <strong>{score}</strong>
      </p>
      <p
        style={{
          fontSize: "18px",
          fontStyle: "italic",
          transition: "transform 0.3s, opacity 0.3s, color 0.3s",
          transform: animate ? "scale(1.1)" : "scale(1)",
          opacity: animate ? 1 : 0.8,
          color: animate ? "#42a5f5" : "#0d47a1", // Animasi perubahan warna
        }}
      >
        {message}
      </p>
      {incorrectAnswers.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#fff3e0",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "#ff6f00", fontSize: "20px", marginBottom: "10px" }}>Jawaban Salah</h3>
          <ul style={{ color: "#d84315", fontSize: "16px" }}>
            {incorrectAnswers.map((answer, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <strong>Pertanyaan:</strong> {answer.question}
                <br />
                <strong>Jawaban Anda:</strong> {answer.userAnswer}
                <br />
                <strong>Jawaban Benar:</strong> {answer.correctAnswer}
                <br />
                <strong>Penjelasan:</strong> {answer.explanation}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatistikBelajar;
