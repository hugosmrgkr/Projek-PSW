import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScore } from "../components/ScoreContext";
import "../styles/kuis.css";

const Kuis = () => {
  const { setScore: updateGlobalScore } = useScore();
  const [questions] = useState([
    {
      text: "1. Jika f(x) = x² + 2x - 3, berapakah nilai f(2)?",
      options: ["A. 5", "B. 3", "C. 1", "D. -1"],
      correctAnswer: "B. 3",
      explanation: "Substitusi x = 2 ke fungsi: f(2) = 2² + 2(2) - 3 = 4 + 4 - 3 = 5.",
    },
    {
      text: "2. Bentuk sederhana dari (24𝑎⁻⁷𝑏⁻²𝑐) / (6𝑎⁻²𝑏⁻³𝑐⁻⁶) adalah .....",
      options: ["A. 7bc/a⁵", "B. 5bc²/a⁵", "C. 4bc⁷/a⁵", "D. 4bc⁵/a⁵", "E. 5bc⁷/a⁵"],
      correctAnswer: "C. 4bc⁷/a⁵",
      explanation: "Sederhanakan pangkat masing-masing variabel: hasil akhirnya adalah 4bc⁷/a⁵.",
    },
    {
      text: "3. Sebuah kotak berisi 10 bola bernomor 1 hingga 10. Jika sebuah bola diambil secara acak, peluang bola yang terambil memiliki nomor ganjil adalah ....",
      options: ["A. 1/2", "B. 3/5", "C. 2/5", "D. 4/5", "E. 1/3"],
      correctAnswer: "A. 1/2",
      explanation: "Ada 5 bola ganjil dari total 10 bola, sehingga peluangnya adalah 5/10 = 1/2.",
    },
    {
      text: "4. Himpunan penyelesaian dari 2𝑥² − 3𝑥 = 16 adalah ....",
      options: ["A. {2,4}", "B. {1,2}", "C. {4,-2}", "D. {-1,2}", "E. {-1,4}"],
      correctAnswer: "E. {-1,4}",
      explanation: "Persamaan kuadrat dipecahkan dengan faktorisasi atau rumus kuadrat: {x | x = -1, x = 4}.",
    },
    {
      text: "5. Himpunan penyelesaian dari 25𝑥+2 = 53𝑥−4 adalah ....",
      options: ["A. 7", "B. 9", "C. 8", "D. 6", "E. 3"],
      correctAnswer: "C. 8",
      explanation: "Logaritmakan kedua sisi, lalu selesaikan persamaan: x = 8.",
    },
    {
      text: "6. Nilai logaritma dari 8log32 adalah ....",
      options: ["A. 5/4", "B. 5/3", "C. 4/5", "D. 5/2", "E. 2/4"],
      correctAnswer: "B. 5/3",
      explanation: "Gunakan properti logaritma: a^log_b(c) = c^(log_b(a)). Jawaban akhirnya adalah 5/3.",
    },
    {
      text: "7. Persamaan yang menyatakan hubungan antara waktu dengan suhu logam yang dipanaskan adalah .....",
      options: [
        "A. F(x) = 3 log x",
        "B. y = 3 log x",
        "C. F(x) = 2 log 3",
        "D. y = 2 log 3",
        "E. y = 2 log x",
      ],
      correctAnswer: "B. y = 3 log x",
      explanation: "Hubungan logaritma sering digunakan untuk menjelaskan fenomena fisik seperti suhu.",
    },
    {
      text: "8. Diketahui suatu barisan aritmetika, suku ke-3 = 9, suku ke-6 = 18. Rumus suku ke-n adalah ....",
      options: ["A. 3n", "B. 4n", "C. 9n", "D. 10n", "E. 6n"],
      correctAnswer: "A. 3n",
      explanation: "Selisih antar suku adalah 3, sehingga rumusnya adalah Un = 3n.",
    },
    {
      text: "9. Diketahui cos α derajat adalah 1/2. α sudut lancip (0 derajat < α < 90). Nilai cos sec α adalah .....",
      options: [
        "A. 2/√3 = 2/3√6",
        "B. 2/√3 = 2/3√4",
        "C. 2/√3 = 2/4√3",
        "D. 2/√3 = 1/2√3",
        "E. 2/√3 = 2/3√3",
      ],
      correctAnswer: "E. 2/√3 = 2/3√3",
      explanation: "Gunakan identitas trigonometri: cos(sec α) = 1/cos(α).",
    },
    {
      text: "10. Jika diketahui fungsi f(x) = x – 11, maka berapakah nilai f(x²) – 3f(x) – (f(x))²?",
      options: ["A. 19x – 99", "B. 19x – 165", "C. -25x – 90", "D. -25x + 143", "E. -3x + 11"],
      correctAnswer: "A. 19x – 99",
      explanation: "Substitusi dan sederhanakan fungsi sesuai operasi yang diberikan.",
    },
    {
      text: "11. Pada segitiga PQR, diketahui panjang sisi PQ = 12 cm, QR = 10 cm, dan besar ∠Q = 30°. Luas segitiga PQR adalah ..... cm².",
      options: ["A. 30", "B. 30√2", "C. 30√3", "D. 45", "E. 60"],
      correctAnswer: "A. 30",
      explanation: "Gunakan rumus luas segitiga: 1/2 × PQ × QR × sin(∠Q).",
    },
    {
      text: "12. Himpunan penyelesaian dari pertidaksamaan x² - 2x - 8 > 0 adalah .....",
      options: [
        "A. {x│x < -2 atau x > 4, x ∈ R}",
        "B. {x│x < 2 atau x > -4, x ∈ R}",
        "C. {x│x > -2 atau x > 4, x ∈ R}",
        "D. {x│x ≤ -2 atau x ≥ 4, x ∈ R}",
        "E. {x│x ≤ -2 atau x > 4, x ∈ R}",
      ],
      correctAnswer: "E. {x│x ≤ -2 atau x > 4, x ∈ R}",
      explanation: "Pecahkan pertidaksamaan kuadrat: faktorisasikan, lalu analisis nilai x.",
    },
    {
      text: "13. Diketahui g(x) = 2x + 3 dan f(x) = x² – 4x + 6, maka (fog)(x) adalah .....",
      options: [
        "A. 2x² - 8x + 12",
        "B. 2x² - 8x + 15",
        "C. 4x² + 4x + 3",
        "D. 4x² + 4x + 15",
        "E. 4x² + 4x + 27",
      ],
      correctAnswer: "B. 2x² - 8x + 15",
      explanation: "Substitusi g(x) ke f(x) menghasilkan ekspresi 2x² - 8x + 15.",
    },
    {
      text: "14. Nilai x dan y yang memenuhi sistem persamaan y = 2x – 3 dan 3x – 4y = 7 adalah .....",
      options: [
        "A. x = -1 dan y = 2",
        "B. x = -1 dan y = -1",
        "C. x = 1 dan y = -1",
        "D. x = -1 dan y = -2",
        "E. x = -1 dan y = 1",
      ],
      correctAnswer: "C. x = 1 dan y = -1",
      explanation: "Selesaikan sistem persamaan dengan substitusi atau eliminasi.",
    },
    {
      text: "15. Diketahui log₆(36) = x, maka berapakah nilai dari x?",
      options: ["A. 2", "B. 1", "C. 3", "D. 4", "E. 6"],
      correctAnswer: "A. 2",
      explanation:
        "Untuk menyelesaikan logaritma log₆(36), kita perlu menulis 36 sebagai hasil perpangkatan dari 6. 6² = 36, jadi log₆(36) = 2.",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [localScore, setLocalScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (answer, correctAnswer) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setLocalScore((prevScore) => prevScore + 10);
    }
    setAnswered(true);
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer("");
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const finishQuiz = () => {
    updateGlobalScore(localScore);
    navigate("/statistik-belajar"); 
  };

  const calculateAverage = () => {
    return (localScore / (questions.length * 10)) * 100; // Rata-rata dalam bentuk persentase
  };

  return (
    <div className="kuis-container">
      <h2>Kuis Matematika</h2>
      {!quizStarted ? (
        <div className="start-screen">
          <p>Selamat datang di Kuis Matematika Kelas 10!</p>
          <button className="start-button" onClick={() => setQuizStarted(true)}>
            Ayo Mulai
          </button>
        </div>
      ) : currentQuestion < questions.length ? (
        <div className="question-card">
          <div className="question-text">{questions[currentQuestion].text}</div>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => {
              let backgroundColor = "";
              if (answered) {
                if (option === questions[currentQuestion].correctAnswer) {
                  backgroundColor = "green";
                } else if (option === selectedAnswer) {
                  backgroundColor = "red";
                }
              }
              return (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswer(option, questions[currentQuestion].correctAnswer)}
                  disabled={answered}
                  style={{ backgroundColor }}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="explanation">
              <p>
                <strong>Penjelasan:</strong> {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
          {answered && (
            <button
              className="next-button"
              onClick={currentQuestion < questions.length - 1 ? nextQuestion : finishQuiz}
            >
              {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
            </button>
          )}
        </div>
      ) : (
        <div className="quiz-end">
          <h3>Kuis Selesai!</h3>
          <p>
            Skor Anda:{" "}
            <strong>
              {localScore}/{questions.length * 10}
            </strong>
          </p>
          <p>
            Rata-rata Anda: <strong>{calculateAverage().toFixed(2)}%</strong>
          </p>
          <p>Terima kasih telah mengikuti kuis ini!</p>
        </div>
      )}
    </div>
  );
};

export default Kuis;
