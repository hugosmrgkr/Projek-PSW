import React from "react";

const FungsiKuadrat = () => {
  const styles = {
    container: {
      maxWidth: "90%",
      margin: "20px auto",
      background: "#faf3e0",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      fontFamily: "'Poppins', sans-serif",
      color: "#333",
    },
    header: {
      background: "#d1b097",
      textAlign: "center",
      padding: "40px",
    },
    headerTitle: {
      margin: 0,
      fontSize: "2.8rem",
      fontWeight: "bold",
      color: "#ffffff",
    },
    headerSubtitle: {
      margin: "10px 0 0",
      fontSize: "1.3rem",
      color: "#e1d7b9",
    },
    content: {
      padding: "30px",
    },
    section: {
      marginBottom: "40px",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#6d4c41",
      marginBottom: "20px",
      borderBottom: "2px solid #d1b097",
      paddingBottom: "5px",
    },
    paragraph: {
      margin: "15px 0",
      color: "#555",
      textAlign: "justify",
    },
    videoContainer: {
      textAlign: "center",
      marginBottom: "40px",
      padding: "20px",
      background: "#f5e6d3",
      borderRadius: "12px",
    },
    exampleWrapper: {
      background: "#ffffff", // Box color
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    exampleBox: {
      marginBottom: "20px", // Space between questions
    },
    jenis: {
      color: "#6d4c41",
      fontSize: "1.6rem",
      marginBottom: "10px",
    },
    deskripsi: {
      fontSize: "1.1rem",
      marginBottom: "20px",
      textAlign: "justify",
      color: "#6d4c41",
    },
    soalContainer: {
      background: "#f5e6d3",
      borderLeft: "5px solid #d1b097",
      padding: "15px",
      borderRadius: "8px",
    },
    pembahasan: {
      marginTop: "15px",
    },
    summary: {
      fontWeight: "bold",
      color: "#6d4c41",
      cursor: "pointer",
    },
    detailsParagraph: {
      marginTop: "10px",
      color: "#444",
      lineHeight: "1.6",
    },
    // Media Queries
    "@media (max-width: 768px)": {
      exampleWrapper: {
        padding: "10px", // Adjust padding for mobile view
      },
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Fungsi Kuadrat</h1>
        <p style={styles.headerSubtitle}>
          Pelajari cara menggambar grafik fungsi kuadrat, memahami sifat-sifatnya, 
          dan menyelesaikan contoh soal.
        </p>
      </header>

      <main style={styles.content}>
        {/* Penjelasan Materi */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pengertian Fungsi Kuadrat</h2>
          <p style={styles.paragraph}>
            Fungsi kuadrat adalah fungsi polinomial atau suku banyak di mana pangkat 
            tertinggi dari variabelnya adalah 2. Bentuk umumnya adalah:
          </p>
          <p style={styles.paragraph}>
            <strong>f(x) = ax² + bx + c</strong>, dengan nilai <strong>a ≠ 0</strong>.
          </p>
          <p style={styles.paragraph}>
            Berikut ciri-ciri fungsi kuadrat:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Bentuk grafiknya berupa parabola (U), yang membuka ke atas atau ke bawah tergantung nilai <strong>a</strong>.</li>
            <li style={styles.listItem}>Memiliki titik balik minimum atau maksimum.</li>
            <li style={styles.listItem}>Terdapat sumbu simetri yang memotong parabola menjadi dua bagian sama.</li>
            <li style={styles.listItem}>Memiliki diskriminan, dengan rumus <strong>D = b² - 4ac</strong>.</li>
          </ul>
        </section>

        {/* Rumus Fungsi Kuadrat */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Rumus Fungsi Kuadrat</h2>
          <p style={styles.paragraph}>
            Rumus umum fungsi kuadrat adalah:
          </p>
          <p style={styles.paragraph}>
            <strong style={{fontSize: "1.8rem", color: "#0077b6", fontFamily: "'Courier New', monospace"}}>f(x) = ax² + bx + c</strong>
          </p>
          <p style={styles.paragraph}>
            Keterangan:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>f(x)</strong>: Fungsi kuadrat</li>
            <li style={styles.listItem}><strong>a</strong> dan <strong>b</strong>: Koefisien</li>
            <li style={styles.listItem}><strong>c</strong>: Konstanta</li>
            <li style={styles.listItem}><strong>x</strong>: Variabel</li>
            <li style={styles.listItem}><strong>a ≠ 0</strong>: Agar fungsi tetap kuadrat</li>
          </ul>
        </section>

        {/* Grafik Fungsi Kuadrat */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Grafik Fungsi Kuadrat</h2>
          <p style={styles.paragraph}>
            Grafik fungsi kuadrat berbentuk parabola dengan sifat-sifat sebagai berikut:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Simetris terhadap sumbu vertikal (sumbu simetri).</li>
            <li style={styles.listItem}>Hanya memiliki titik minimum atau maksimum, tidak keduanya.</li>
          </ul>
        </section>

        {/* Video */}
        <div style={styles.videoContainer}>
          <h2 style={styles.sectionTitle}>Video Penjelasan Fungsi Kuadrat</h2>
          <iframe
            width="70%"
            height="400"
            src="https://www.youtube.com/embed/vvb4jfxnQzI"
            title="Video Penjelasan Transformasi Geometri"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Contoh Soal */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contoh Soal</h2>
          <div style={styles.exampleWrapper}>
            {/* Soal 1 */}
            <div style={styles.exampleBox}>
              <p style={styles.paragraph}>
                <strong>Soal 1:</strong> Diketahui grafik <em>y = 4x² + 2x − 12</em>. 
                Maka, tentukanlah titik potong grafik pada sumbu x!
              </p>
              <details style={styles.details}>
                <summary style={styles.summary}>Lihat Pembahasan</summary>
                <p style={styles.detailsParagraph}>
                  Grafik memotong sumbu x jika y = 0:
                  <br />
                  <strong>4x² + 2x − 12 = 0</strong> → <strong>(2x − 3)(2x + 4) = 0</strong>
                  <br />
                  Titik potong: <strong>(3/2, 0)</strong> dan <strong>(-2, 0)</strong>.
                </p>
              </details>
            </div>

            {/* Soal 2 */}
            <div style={styles.exampleBox}>
              <p style={styles.paragraph}>
                <strong>Soal 2:</strong> Diketahui grafik <em>y = 2x² + x − 6</em>. 
                Tentukanlah titik potong grafik pada sumbu y!
              </p>
              <details style={styles.details}>
                <summary style={styles.summary}>Lihat Pembahasan</summary>
                <p style={styles.detailsParagraph}>
                  Titik potong sumbu y terjadi ketika x = 0:
                  <br />
                  <strong>y = 2(0)² + 0 − 6 = -6</strong>
                  <br />
                  Jadi, titik potongnya adalah <strong>(0, -6)</strong>.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FungsiKuadrat;
