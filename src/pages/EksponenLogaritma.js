import React from "react";

const EksponenLogaritma = () => {
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
  Sebagai contoh, \( 2^3 = 8 \), artinya 2 dikalikan dengan dirinya sendiri sebanyak 3 kali.
  <br />
  <br />
  <strong>Logaritma</strong>, di sisi lain, adalah operasi yang membalikkan operasi eksponen. 
  Dengan kata lain, logaritma memberikan kita informasi tentang berapa banyak kali suatu bilangan (basis) harus dipangkatkan untuk mendapatkan angka tertentu. 
  Sebagai contoh, \( \log_2(8) = 3 \), artinya kita harus mengalikan 2 sebanyak 3 kali untuk mendapatkan 8.
</p>

        <div style={styles.card}>
          <h2 style={styles.subtitle}>Eksponen</h2>
          <p style={styles.text}>
            Eksponen menunjukkan berapa kali suatu bilangan (basis) dikalikan dengan dirinya sendiri. 
            Contoh: \( 2^3 = 2 \times 2 \times 2 = 8 \).
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.subtitle}>Logaritma</h2>
          <p style={styles.text}>
            Logaritma adalah operasi yang membalikkan eksponen. Contoh: 
            Jika \( 2^3 = 8 \), maka \( \log_2(8) = 3 \).
          </p>
        </div>
      </section>

      <section style={styles.examples}>
        <h2 style={styles.subtitle}>Contoh Soal</h2>
        <ul style={styles.list}>
          <li>Menjumlahkan dan mengalikan bilangan berpangkat.</li>
          <li>Menyelesaikan persamaan logaritma sederhana.</li>
        </ul>
        <img
          src="https://via.placeholder.com/600x300?text=Grafik+Eksponen+dan+Logaritma"
          alt="Grafik Eksponen dan Logaritma"
          style={styles.image}
        />
        <video style={styles.video} controls>
          <source
            src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
            type="video/mp4"
          />
          Browser Anda tidak mendukung video.
        </video>
      </section>

      <footer style={styles.footer}>
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
  cardHover: {
    transform: "scale(1.05)",
  },
  examples: {
    textAlign: "center",
    marginTop: "20px",
  },
  list: {
    textAlign: "left",
    margin: "0 auto 20px",
    maxWidth: "500px",
    listStyle: "circle",
    padding: "0 20px",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  video: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
};

export default EksponenLogaritma;
