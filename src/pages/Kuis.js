import React, { useState } from "react";
import { useScore } from "../components/ScoreContext"; // Gunakan ScoreContext
import "../styles/kuis.css";

const Kuis = () => {
  const { setScore: updateGlobalScore } = useScore(); // Untuk memperbarui skor global
  const [questions] = useState([
    {
      text: "1. Jika f(x) = x² + 2x - 3, berapakah nilai f(2)?",
      options: ["A. 5", "B. 3", "C. 1", "D. -1"],
      correctAnswer: "B. 3",
    },
    {
      text: "2. Bentuk sederhana dari (24𝑎⁻⁷𝑏⁻²𝑐) / (6𝑎⁻²𝑏⁻³𝑐⁻⁶) adalah .....",
      options: ["A. 7bc/a⁵", "B. 5bc²/a⁵", "C. 4bc⁷/a⁵", "D. 4bc⁵/a⁵", "E. 5bc⁷/a⁵"],
      correctAnswer: "C. 4bc⁷/a⁵",
    },
    {
      text: "3. Pada pukul 08.00 pagi massa suatu zat radioaktif adalah 0,2 kg. Apabila diketahui laju peluruhan zat radioaktif tersebut 10% setiap jam, sisa zat radioaktif itu pada pukul 14.00 siang dalam gram adalah .....",
      options: ["A. 100 gram", "B. 103 gram", "C. 107 gram", "D. 106 gram", "E. 110 gram"],
      correctAnswer: "D. 106 gram",
    },
    {
      text: "4. Himpunan penyelesaian dari 2𝑥² − 3𝑥 = 16 adalah ....",
      options: ["A. {2,4}", "B. {1,2}", "C. {4,-2}", "D. {-1,2}", "E. {-1,4}"],
      correctAnswer: "E. {-1,4}",
    },
    {
      text: "5. Himpunan penyelesaian dari 25𝑥+2 = 53𝑥−4 adalah ....",
      options: ["A. 7", "B. 9", "C. 8", "D. 6", "E. 3"],
      correctAnswer: "C. 8",
    },
    {
      text: "6. Nilai logaritma dari 8log32 adalah ....",
      options: ["A. 5/4", "B. 5/3", "C. 4/5", "D. 5/2", "E. 2/4"],
      correctAnswer: "B. 5/3",
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
    },
    {
      text: "8. Diketahui suatu barisan aritmetika, suku ke-3 = 9, suku ke-6 = 18. Rumus suku ke-n adalah ....",
      options: ["A. 3n", "B. 4n", "C. 9n", "D. 10n", "E. 6n"],
      correctAnswer: "A. 3n",
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
    },
    {
      text: "10. Jika diketahui fungsi f(x) = x – 11, maka berapakah nilai f(x²) – 3f(x) – (f(x))²?",
      options: ["A. 19x – 99", "B. 19x – 165", "C. -25x – 90", "D. -25x + 143", "E. -3x + 11"],
      correctAnswer: "A. 19x – 99",
    },
    {
      text: "11. Pada segitiga PQR, diketahui panjang sisi PQ = 12 cm, QR = 10 cm, dan besar ∠Q = 30°. Luas segitiga PQR adalah ..... cm².",
      options: ["A. 30", "B. 30√2", "C. 30√3", "D. 45", "E. 60"],
      correctAnswer: "A. 30",
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
    },
    {
      text: "15. Diketahui f(x) = 3 – x. Nilai mutlak dari f(x) adalah .....",
      options: ["A. |3 – x|", "B. |3| – |x|", "C. (3) – (x)", "D. (3 – x)", "E. 3 – x"],
      correctAnswer: "A. |3 – x|",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [localScore, setLocalScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswer = (answer, correctAnswer) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setLocalScore((prevScore) => prevScore + 1);
    }
    setAnswered(true);
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer("");
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const finishQuiz = () => {
    updateGlobalScore(localScore); // Simpan skor ke konteks global
  };

  return (
    <div className="kuis-container">
      <h2>Kuis Matematika</h2>
      {currentQuestion < questions.length ? (
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
              {localScore}/{questions.length}
            </strong>
          </p>
          <p>Terima kasih telah mengikuti kuis ini!</p>
        </div>
      )}
    </div>
  );
};

export default Kuis;
