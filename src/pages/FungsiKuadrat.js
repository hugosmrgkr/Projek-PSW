import React from "react";

const FungsiKuadrat = () => {
  const styles = {
    container: {
      maxWidth: "1000px",  // Ubah lebar kontainer menjadi lebih besar
      margin: "20px auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      lineHeight: "1.6",
    },
    header: {
      background: "#0077b6",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
    },
    headerTitle: {
      margin: 0,
      fontSize: "2rem",
    },
    headerSubtitle: {
      margin: "10px 0 0",
      fontSize: "1rem",
    },
    content: {
      padding: "20px",
    },
    section: {
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      color: "#0077b6",
      marginBottom: "10px",
    },
    paragraph: {
      margin: "10px 0",
    },
    exampleBox: {
      background: "#f9f9f9",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    listItem: {
      margin: "5px 0",
    },
    summary: {
      fontWeight: "bold",
      color: "#0077b6",
      cursor: "pointer",
    },
    details: {
      marginTop: "10px",
    },
    detailsParagraph: {
      margin: 0,
      color: "#555",
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
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Video Penjelasan</h2>
          <p style={styles.paragraph}>Simak video berikut untuk memahami fungsi kuadrat:</p>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              paddingTop: "56.25%", // 16:9 Aspect Ratio
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Penjelasan Fungsi Kuadrat"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Contoh Soal */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contoh Soal</h2>

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
                <strong>y = 2(0)² + 0 − 6</strong> → <strong>y = -6</strong>
                <br />
                Titik potong: <strong>(0, -6)</strong>
              </p>
            </details>
            {/* Soal 3 */}
          <div style={styles.exampleBox}>
            <p style={styles.paragraph}>
              <strong>Soal 3:</strong> Pabrik tekstil ingin memproduksi <em>x</em> 
              potong celana. Biaya produksi dijabarkan dalam fungsi 
              <em>B(x) = 3x² − 30x + 175</em>. Hitung biaya minimum!
            </p>
            <details style={styles.details}>
              <summary style={styles.summary}>Lihat Pembahasan</summary>
              <p style={styles.detailsParagraph}>
                Gunakan rumus <strong>x = -b / 2a</strong>:
                <br />
                <strong>x = -(-30) / (2 × 3) = 5</strong>
                <br />
                Substitusi ke fungsi: <strong>B(5) = 3(5²) − 30(5) + 175 = 100</strong>
                <br />
                Biaya minimum: <strong>100 (ratusan ribu rupiah)</strong>.
              </p>
            </details>
          </div>

          {/* Soal 4 */}
          <div style={styles.exampleBox}>
            <p style={styles.paragraph}>
              <strong>Soal 4:</strong> Pada fungsi <em>f(x) = ax² − 8x + c</em> 
              dengan titik puncak (2, 3). Tentukan nilai <em>f(3)</em>!
            </p>
            <details style={styles.details}>
              <summary style={styles.summary}>Lihat Pembahasan</summary>
              <p style={styles.detailsParagraph}>
                Diketahui <em>xp = -b / 2a</em>, sehingga <strong>a = 2</strong>.
                <br />
                Substitusi titik puncak: <strong>3 = 2(2²) − 8(2) + c</strong> → <strong>c = 11</strong>.
                <br />
                Hitung nilai <strong>f(3) = 2(3²) − 8(3) + 11 = 1</strong>.
                <br />
                Jadi, nilai <strong>f(3) = 1</strong>.
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
