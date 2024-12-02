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
      src="https://www.youtube.com/embed/lScgN1qnirY"
      title="Eksponen dan Logaritma"
      style={styles.videoFrame}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>

<br></br>
<br></br>

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
      src="Eksponen.jpeg" 
      alt="Ilustrasi Eksponen dan Logaritma"
      style={styles.image}
    />
  </div>
</section>


      <footer style={styles.footer}>
  <div style={styles.logoContainer}>
    <img
      src="Logopsw.jpg" 
      alt="Logo Forma10"
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
    animation: "fadeIn 1s ease-in-out",
  },
  header: {
    textAlign: "center",
    background: "#b0e6ef",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Bayangan halus
  },
  title: {
    fontSize: "3.5em", // Ukuran lebih besar
    color: "#003f63", // Warna teks utama
    margin: 0,
    fontFamily: "'Playfair Display', serif", // Font keren
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Efek bayangan teks
    letterSpacing: "1px", // Spasi antar huruf
  },
  subtitle: {
    fontSize: "2em", // Lebih besar dari sebelumnya
    color: "#007699",
    marginBottom: "10px",
    fontWeight: "600", // Penegasan pada teks
   
    paddingBottom: "5px",
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
      padding: "20px",
      textAlign: "center",
      background: "linear-gradient(135deg, #a0d8f1, #89c9e0)",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      border: "1px solid #89c9e0",
      color: "#002b49",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
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

export default EksponenLogaritma;
