import React, { useState } from "react";

const PersamaanKuadrat = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleExplanation = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Bagaimana cara menyelesaikan persamaan kuadrat menggunakan faktorisasi?",
      explanation: "Untuk menyelesaikan dengan faktorisasi, ubah persamaan menjadi bentuk faktorial seperti (x - p)(x - q) = 0, lalu cari nilai x dari p dan q.",
    },
    {
      question: "Apa rumus kuadrat untuk menyelesaikan persamaan kuadrat?",
      explanation: "Rumus kuadrat adalah x = [-b ± \u221a(b² - 4ac)] / 2a, yang digunakan ketika faktorisasi tidak memungkinkan.",
    },
    {
      question: "Apa itu metode melengkapkan kuadrat?",
      explanation: "Metode ini melibatkan menambahkan nilai tertentu ke kedua sisi persamaan untuk mengubahnya menjadi bentuk kuadrat sempurna, seperti (x + p)^2 = q.",
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Persamaan Kuadrat</h1>
      </header>

      <section style={styles.section}>
  <h2 style={styles.heading}>Persamaan Kuadrat</h2>
  <p style={styles.text}>
    Persamaan kuadrat adalah persamaan yang berbentuk <strong>ax² + bx + c = 0</strong>, 
    di mana <em>a</em>, <em>b</em>, dan <em>c</em> adalah konstanta, serta <em>a ≠ 0</em>. 
    Berikut adalah beberapa metode untuk menyelesaikan persamaan kuadrat:
  </p>
  <ul style={styles.list}>
    <li>
      <strong>Faktorisasi:</strong> 
      Memecah persamaan menjadi dua faktor linear.
      <br />
      Contoh: 
      Jika <code>x² - 5x + 6 = 0</code>, maka faktornya adalah <code>(x - 2)(x - 3) = 0</code>, sehingga <em>x = 2</em> atau <em>x = 3</em>.
    </li>
    <li>
      <strong>Rumus Kuadrat:</strong> 
      Menggunakan rumus:
      <br />
      <code>x = (-b ± √(b² - 4ac)) / 2a</code>
      <br />
      Contoh: Jika <code>2x² - 4x - 6 = 0</code>, substitusi <em>a = 2</em>, <em>b = -4</em>, dan <em>c = -6</em> ke dalam rumus untuk mendapatkan nilai <em>x</em>.
    </li>
    <li>
      <strong>Melengkapkan Kuadrat:</strong> 
      Mengubah bentuk persamaan menjadi kuadrat sempurna. 
      <br />
      Langkah-langkah:
      <ol style={styles.nestedList}>
        <li>Pindahkan konstanta (<em>c</em>) ke sisi kanan persamaan.</li>
        <li>Tambahkan nilai yang membuat sisi kiri menjadi kuadrat sempurna.</li>
        <li>Ekstrak akar kuadrat dan selesaikan untuk <em>x</em>.</li>
      </ol>
      Contoh: <code>x² - 6x + 5 = 0</code> diubah menjadi <code>(x - 3)² = 4</code>, sehingga <em>x = 3 ± 2</em>.
    </li>
  </ul>
  <p style={styles.text}>
    Persamaan kuadrat sering digunakan dalam berbagai bidang seperti fisika, teknik, dan ekonomi untuk memodelkan hubungan kuadratik.
  </p>
</section>


      <section style={styles.section}>
  <h2 style={styles.subtitle}>Video Pembelajaran</h2>
  <div style={styles.videoContainer}>
    <iframe
      src="https://www.youtube.com/embed/yAFHhAhAI2U"
      title="Persamaan Kuadrat"
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
                {selectedQuestion === index ? "Sembunyikan" : "Tampilkan"} Penjelasan
              </button>
              {selectedQuestion === index && (
                <p style={styles.explanation}>{item.explanation}</p>
              )}
            </div>
          ))}
        </div>

      </section>
      <section style={styles.section}>
  <h2 style={styles.subtitle}>Gambar</h2>
  <div style={styles.imageContainer}>
    <img
      src="Persamaan Kuadrat.jpg" 
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
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "3.5em", 
    color: "#003f63", 
    margin: 0,
    fontFamily: "'Playfair Display', serif", 
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", 
    letterSpacing: "1px", 
  },
  section: {
    marginBottom: "20px",
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

export default PersamaanKuadrat;
