import React, { useEffect, useState } from "react";
import { useScore } from "../components/ScoreContext";

const StatistikBelajar = () => {
  const { score } = useScore();
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

    // Reset animasi setelah selesai
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [score]);

  const showIncorrectAnswers = () => {
    // Contoh data jawaban salah
    const dummyIncorrectAnswers = [
      "Pertanyaan 1: Jawaban Anda salah. Jawaban benar adalah X.",
      "Pertanyaan 3: Jawaban Anda salah. Jawaban benar adalah Y.",
      "Pertanyaan 5: Jawaban Anda salah. Jawaban benar adalah Z.",
    ];
    setIncorrectAnswers(dummyIncorrectAnswers);
  };

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
      <h2 style={{ color: "#1565c0", fontSize: "26px", marginBottom: "20px", fontWeight: "600" }}> {/* Warna teks biru lebih gelap */}
        Statistik Belajar
      </h2>
      <p style={{ fontSize: "20px", marginBottom: "15px", color: "#1e88e5", fontWeight: "500" }}> {/* Warna teks biru */}
        Skor kuis terakhir Anda: <strong>{score}</strong>
      </p>
      <p
        style={{
          fontSize: "18px",
          fontStyle: "italic",
          color: "#0d47a1", // Warna teks biru tua
          transition: "transform 0.3s, opacity 0.3s, color 0.3s",
          transform: animate ? "scale(1.1)" : "scale(1)",
          opacity: animate ? 1 : 0.8,
          color: animate ? "#42a5f5" : "#0d47a1", // Animasi perubahan warna
        }}
      >
        {message}
      </p>
      <div
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#42a5f5",
          color: "#ffffff",
          borderRadius: "5px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1e88e5")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#42a5f5")}
        onClick={showIncorrectAnswers}
      >
        Teruskan Belajarmu!
      </div>
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
                {answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatistikBelajar;
