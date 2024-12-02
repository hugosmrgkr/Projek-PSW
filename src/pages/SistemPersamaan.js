import React, { useState } from "react";

const SistemPersamaan = () => {
  const [selectedExample, setSelectedExample] = useState(null);

  const toggleExplanation = (index) => {
    setSelectedExample(selectedExample === index ? null : index);
  };

  const examples = [
    {
      question: "Tentukan titik perpotongan antara y = 2x + 3 dan y = -x + 5.",
      explanation: (
        <div>
          <p>
            Dalam contoh ini, kita dapat menggunakan metode substitusi untuk
            menemukan titik perpotongan antara dua garis linear. Mengganti nilai
            y dari kedua persamaan menghasilkan titik perpotongan pada koordinat
            (x, y) = (2/3, 11/3).
          </p>
          <p><b>Penting:</b> Pastikan untuk memeriksa kembali solusi Anda dengan substitusi ke dalam kedua persamaan untuk memastikan keakuratannya.</p>
        </div>
      ),
    },
    {
      question: "Selesaikan sistem x^2 + y^2 = 25 dan y = 3x.",
      explanation: (
        <div>
          <p>
            Dengan menggantikan y dalam persamaan pertama menggunakan persamaan kedua
            (y = 3x), kita mendapatkan dua solusi untuk sistem ini. Hasilnya adalah
            titik perpotongan di (x, y) = (3, 9) dan (-3, -9), yang merupakan dua solusi
            dari sistem persamaan ini.
          </p>
          <p><b>Catatan:</b> Sistem ini memberikan dua solusi berbeda yang mewakili dua titik pada lingkaran dan garis.</p>
        </div>
      ),
    },
    {
      question: "Tentukan titik perpotongan antara y = x^2 dan y = 2x + 3.",
      explanation: (
        <div>
          <p>
            Untuk menemukan titik perpotongan antara fungsi kuadrat dan fungsi linear, kita
            mengganti y pada kedua persamaan. Ini menghasilkan persamaan kuadrat x² = 2x + 3,
            yang dapat diselesaikan untuk menemukan x = -1 dan x = 3. Oleh karena itu, titik
            perpotongan berada di (-1, 1) dan (3, 9).
          </p>
          <p><b>Tips:</b> Saat menyelesaikan persamaan kuadrat, periksa apakah solusi yang ditemukan masuk akal dalam konteks masalah.</p>
        </div>
      ),
    },
    {
      question: "Selesaikan sistem 2x + 3y = 6 dan x^2 + y^2 = 13.",
      explanation: (
        <div>
          <p>
            Sistem ini melibatkan kombinasi antara persamaan linear dan kuadrat. Menggunakan
            metode eliminasi dan substitusi, kita menemukan dua solusi yaitu (x, y) = (3, 0)
            dan (-3, 0), yang berarti garis dan lingkaran berpotongan pada dua titik tersebut.
          </p>
          <p><b>Penting:</b> Pada masalah seperti ini, sangat berguna untuk memeriksa apakah solusi yang ditemukan memenuhi kedua persamaan.</p>
        </div>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Sistem Persamaan Linear dan Kuadrat</h1>
      </header>

      <section style={styles.section}>
  <p style={styles.text}>
    Dalam matematika, <strong>sistem persamaan linear dan kuadrat</strong> melibatkan kombinasi dari dua jenis persamaan:
    <br />
    <span style={styles.highlightText}>Persamaan Linear</span> (berbentuk <em>ax + by = c</em>) dan <span style={styles.highlightText}>Persamaan Kuadrat</span> (berbentuk <em>ax² + bx + c = 0</em>).
  </p>

  <p style={styles.text}>
    Untuk menyelesaikan sistem persamaan ini, Anda dapat menggunakan beberapa <strong>metode utama</strong>, yaitu:
  </p>
  
  <ul style={styles.list}>
    <li><span style={styles.method}>Metode Substitusi</span>: Menyelesaikan salah satu persamaan dan menggantikan nilai variabel ke persamaan lainnya.</li>
    <li><span style={styles.method}>Metode Eliminasi</span>: Menghilangkan salah satu variabel dengan menjumlahkan atau mengurangkan persamaan.</li>
    <li><span style={styles.method}>Metode Grafik</span>: Memvisualisasikan persamaan pada grafik untuk menemukan titik perpotongan.</li>
  </ul>

  <p style={styles.text}>
    Metode-metode ini membantu Anda menemukan titik-titik di mana kedua persamaan saling bertemu. Pendekatan ini tidak hanya bermanfaat dalam matematika, tetapi juga digunakan dalam berbagai bidang seperti <strong>fisika, ekonomi, dan teknik</strong>.
  </p>

  <p style={styles.text}>
    Sebagai contoh, sistem persamaan ini dapat digunakan untuk memodelkan fenomena <em>gerakan parabola</em> dan <em>garis lurus</em> dalam bidang dua dimensi, yang sering ditemukan dalam perhitungan pergerakan objek atau analisis data.
  </p>

  <p style={styles.textHighlight}>
    <strong>Tip:</strong> Pastikan Anda memahami <em>sifat dasar</em> dari persamaan linear dan kuadrat untuk menyelesaikan sistem ini secara efisien dan akurat. Selalu periksa solusi Anda dengan mensubstitusikannya kembali ke dalam persamaan asli untuk memastikan konsistensi.
  </p>
</section>

<section style={styles.section}>
  <h2 style={styles.subtitle}>Video Pembelajaran</h2>
  <div style={styles.videoContainer}>
    <iframe
      src="https://www.youtube.com/embed/JVANLCfV70w"
      title="Eksponen dan Logaritma"
      style={styles.videoFrame}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>

<br></br>
      
      <section style={styles.examplesSection}>
        <h2 style={styles.subtitle}>Contoh Soal Interaktif</h2>
        <div style={styles.examplesList}>
          {examples.map((item, index) => (
            <div key={index} style={styles.card}>
              <p style={styles.text}>{item.question}</p>
              <button
                style={styles.button}
                onClick={() => toggleExplanation(index)}
              >
                {selectedExample === index ? "Sembunyikan" : "Tampilkan"} Penjelasan
              </button>
              {selectedExample === index && (
                <div style={styles.explanation}>
                  {item.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
  <h2 style={styles.subtitle}>Gambar Ilustrasi</h2>
  <div style={styles.imageContainer}>
    <img
      src="SistemLin.jpg" 
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
  subtitle: {
    fontSize: "2em", 
    marginBottom: "10px",
    fontWeight: "600", 
    fontFamily: "'Raleway', sans-serif",
    paddingBottom: "5px",
  },
  text: {
    fontSize: "1em",
    color: "#555",
    marginBottom: "10px",
  },
  list: {
    marginLeft: "20px",
  },
  examplesSection: {
    marginTop: "20px",
  },
  card: {
    background: "#eaf6f6",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  button: {
    background: "#007699",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  explanation: {
    marginTop: "10px",
    background: "#fff",
    border: "1px solid #007699",
    padding: "10px",
    borderRadius: "5px",
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
    background: "linear-gradient(135deg, #bbdefb, #e3f2fd)", 
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", 
    maxWidth: "600px",
    margin: "0 auto", 
  },
  videoFrame: {
    width: "100%",
    maxWidth: "400px", 
    aspectRatio: "16 / 9", 
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

export default SistemPersamaan;
