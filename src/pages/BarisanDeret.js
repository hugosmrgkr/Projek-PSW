import React, { useState } from "react";

const BarisanDeret = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Fungsi untuk menghitung suku ke-n dalam barisan aritmatika
  const hitungAritmatika = (a1, d, n) => a1 + (n - 1) * d;

  // Fungsi untuk menghitung jumlah deret aritmatika
  const jumlahAritmatika = (n, a1, an) => (n / 2) * (a1 + an);

  // Fungsi untuk menghitung suku ke-n dalam barisan geometri
  const hitungGeometri = (a1, r, n) => a1 * Math.pow(r, n - 1);

  // Fungsi untuk menghitung jumlah deret geometri
  const jumlahGeometri = (a1, r, n) => a1 * ((1 - Math.pow(r, n)) / (1 - r));

  // Toggle untuk menampilkan/menghilangkan pemahaman soal
  const toggleExplanation = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  // Data soal interaktif
  const questions = [
    {
      question: "Hitung suku ke-5 dari barisan aritmatika dengan suku pertama 3 dan beda 2.",
      explanation: "Suku ke-5 = 3 + (5 - 1) * 2 = 3 + 8 = 11.",
    },
    {
      question: "Tentukan jumlah deret aritmatika dengan n = 6, suku pertama 2, dan suku terakhir 12.",
      explanation: "Jumlah deret = (6 / 2) * (2 + 12) = 3 * 14 = 42.",
    },
    {
      question: "Hitung suku ke-4 dari barisan geometri dengan suku pertama 2 dan rasio 3.",
      explanation: "Suku ke-4 = 2 * 3^(4-1) = 2 * 27 = 54.",
    },
    {
      question: "Tentukan jumlah deret geometri dengan suku pertama 2, rasio 2, dan n = 5.",
      explanation: "Jumlah deret = 2 * ((1 - 2^5) / (1 - 2)) = 2 * (31) = 62.",
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Barisan dan Deret</h1>
      </header>

      <section style={styles.section}>
        <p style={styles.text}>
          Barisan dan deret adalah konsep penting dalam matematika. Barisan adalah urutan angka, sedangkan deret adalah jumlah dari angka-angka dalam barisan.
          <br />
          <strong>Barisan Aritmatika:</strong> Barisan dengan selisih tetap antara dua suku berturut-turut. Misalnya, 3, 5, 7, 9, ... dengan beda 2.
          <br />
          <strong>Barisan Geometri:</strong> Barisan dengan rasio tetap antara dua suku berturut-turut. Misalnya, 2, 6, 18, 54, ... dengan rasio 3.
          <br />
          <strong>Deret Aritmatika:</strong> Jumlah dari beberapa suku dalam barisan aritmatika.
          <br />
          <strong>Deret Geometri:</strong> Jumlah dari beberapa suku dalam barisan geometri.
        </p>
      </section>

      <section style={styles.section}>
  <h2 style={styles.subtitle}>Video Pembelajaran</h2>
  <div style={styles.videoContainer}>
    <iframe
      src="https://www.youtube.com/embed/sBcdhSudHw8"
      title="Eksponen dan Logaritma"
      style={styles.videoFrame}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>
<br></br>
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
      src="Barisan.jpeg" 
      alt="Ilustrasi Eksponen dan Logaritma"
      style={styles.image}
    />
  </div>
</section>


      <footer style={styles.footer}>
        <div style={styles.logoContainer}>
          <img
            src="Logopsw.jpg" 
            alt="Logo"
            style={styles.logo}
          />
          <h2 style={styles.footerTitle}>Forma10 - FORM MATH X CLASS</h2>
        </div>
        <p style={styles.footerText}>
          © 2024 Materi Matematika Kelas 10. Semua hak dilindungi.
        </p>
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
  },
  header: {
    textAlign: "center",
    background: "#b0e6ef",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "3.5em",
    color: "#003f63",
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  subtitle: {
    fontSize: "2em",
    marginBottom: "10px",
    fontWeight: "600",
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
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #a0d8f1, #89c9e0)",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    border: "1px solid #89c9e0",
    color: "#002b49",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  logo: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  footerTitle: {
    fontSize: "1.2em",
    fontWeight: "600",
    color: "#002b49",
  },
  footerText: {
    fontSize: "0.9em",
    color: "#003f63",
    marginTop: "10px",
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    padding: "20px",
    background: "linear-gradient(135deg, #bbdefb, #e3f2fd)", // Warna latar biru muda
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Bayangan lebih lembut
    maxWidth: "600px", // Batas lebar maksimum
    margin: "0 auto", // Video di tengah
  },
  videoFrame: {
    width: "100%",
    maxWidth: "400px", // Ukuran video lebih kecil
    aspectRatio: "16 / 9", // Menjaga rasio aspek
    border: "none",
    borderRadius: "8px",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #bbdefb, #e3f2fd)", 
    borderRadius: "12px", 
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", 
    maxWidth: "650px", 
    margin: "20px auto", 
  },
  image: {
    width: "100%",
    maxWidth: "500px", 
    borderRadius: "10px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    objectFit: "cover", 
  },
};

export default BarisanDeret;
