import React, { useState } from "react";

const EksponenLogaritma = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Fungsi untuk menghitung eksponen
  const hitungEksponen = (basis, pangkat) => Math.pow(basis, pangkat);

  // Fungsi untuk menghitung logaritma
  const hitungLogaritma = (angka, basis) => Math.log(angka) / Math.log(basis);

  // Toggle untuk menampilkan/menghilangkan pemahaman soal
  const toggleExplanation = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  // Data soal interaktif
  const questions = [
    {
      question: "Hitung hasil dari 3⁴ (3 pangkat 4).",
      explanation: "3⁴ = 3 × 3 × 3 × 3 = 81. Jadi, jawabannya adalah 81.",
    },
    {
      question: "Tentukan nilai log₅(125) (logaritma basis 5 dari 125).",
      explanation: "log₅(125) = 3 karena 5³ = 125. Jadi, jawabannya adalah 3.",
    },
    {
      question: "Selesaikan persamaan eksponensial: 2ˣ = 32.",
      explanation: "2ˣ = 32 berarti x = 5 karena 2⁵ = 32. Jadi, x = 5.",
    },
    {
      question: "Selesaikan persamaan logaritma: log₃(x) = 4.",
      explanation: "log₃(x) = 4 berarti x = 3⁴ = 81. Jadi, x = 81.",
    },
  ];

  // Contoh perhitungan
  const contohEksponen = hitungEksponen(2, 3); // 2^3 = 8
  const contohLogaritma = hitungLogaritma(8, 2); // log2(8) = 3

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Eksponen dan Logaritma</h1>
      </header>

      <section style={styles.section}>
        <p style={styles.text}>
          Dalam matematika, <strong>Eksponen</strong> dan <strong>Logaritma</strong> adalah dua konsep yang sangat penting.
          Keduanya digunakan dalam berbagai bidang seperti fisika, keuangan, dan ilmu komputer.
          <br />
          <br />
          <strong>Eksponen</strong> mengacu pada operasi matematika yang menunjukkan berapa kali suatu bilangan (basis) dikalikan dengan dirinya sendiri.
          Sebagai contoh, 2³ = 8, artinya 2 dikalikan dengan dirinya sendiri sebanyak 3 kali.
          <br />
          <br />
          <strong>Logaritma</strong>, di sisi lain, adalah operasi yang membalikkan operasi eksponen.
          Dengan kata lain, logaritma memberikan kita informasi tentang berapa banyak kali suatu bilangan (basis) harus dipangkatkan untuk mendapatkan angka tertentu.
          Sebagai contoh, log₂(8) = 3, artinya kita harus mengalikan 2 sebanyak 3 kali untuk mendapatkan 8.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Video Pembelajaran</h2>
        <div style={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your desired YouTube video URL
            title="Eksponen dan Logaritma"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section style={styles.examples}>
        <div style={styles.card}>
          <h2 style={styles.subtitle}>Eksponen</h2>
          <p style={styles.text}>
            Eksponen menunjukkan berapa kali suatu bilangan (basis) dikalikan dengan dirinya sendiri.
            <br />
            Contoh: 2³ = 2 × 2 × 2 = {contohEksponen}.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.subtitle}>Logaritma</h2>
          <p style={styles.text}>
            Logaritma adalah operasi yang membalikkan eksponen.
            <br />
            Contoh: Jika 2³ = 8, maka log₂(8) = {contohLogaritma}.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Contoh Soal</h2>
        <div style={styles.examplesList}>
          {questions.map((item, index) => (
            <div key={index} style={styles.card}>
              <p style={styles.text}>{item.question}</p>
              <button
                style={styles.button}
                onClick={() => toggleExplanation(index)}
              >
                {selectedQuestion === index ? "Sembunyikan" : "Tampilkan"} Pemahaman
              </button>
              {selectedQuestion === index && (
                <p style={styles.explanation}>{item.explanation}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Gambar Ilustrasi</h2>
        <div style={styles.imageContainer}>
          <img
            src="https://example.com/ilustrasi.png" // Replace with your desired image URL
            alt="Ilustrasi Eksponen dan Logaritma"
            style={styles.image}
          />
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Materi Matematika Kelas 10. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    color: "#444",
    background: "#fefefe",
    padding: "20px",
    animation: "fadeIn 1s ease-in-out",
  },
  header: {
    textAlign: "center",
    background: "#b0e6ef",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5em",
    color: "#003f63",
    margin: 0,
  },
  section: {
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.8em",
    color: "#007699",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1em",
    color: "#555",
    marginBottom: "10px",
  },
  card: {
    background: "#eaf6f6",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  examples: {
    textAlign: "center",
  },
  examplesList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    background: "#007699",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  explanation: {
    marginTop: "10px",
    background: "#fff",
    border: "1px solid #007699",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  footer: {
    marginTop: "20px",
    padding: "10px",
    textAlign: "center",
    background: "#b0e6ef",
    borderRadius: "10px",
  },
  footerText: {
    fontSize: "0.9em",
    color: "#003f63",
  },
  videoContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  imageContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "10px",
  },
};

export default EksponenLogaritma;
