import React from "react";

const Trigonometri = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "20px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
      fontSize: "2.5rem",
    },
    headerSubtitle: {
      margin: "10px 0 0",
      fontSize: "1.2rem",
    },
    content: {
      padding: "20px",
    },
    section: {
      marginBottom: "30px",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#0077b6",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginBottom: "20px",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
      marginBottom: "20px",
    },
    listItem: {
      margin: "10px 0",
      fontSize: "1.1rem",
    },
    exampleBox: {
      background: "#f0f8ff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    exampleTitle: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    formula: {
      fontSize: "1.2rem",
      fontFamily: "'Courier New', monospace",
      color: "#333",
    },
    table: {
      width: "100%",
      marginTop: "20px",
      borderCollapse: "collapse",
    },
    tableHeader: {
      background: "#00b4d8",
      color: "#fff",
      padding: "10px",
      textAlign: "center",
    },
    tableCell: {
      padding: "10px",
      textAlign: "center",
      border: "1px solid #ddd",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Trigonometri</h1>
        <p style={styles.headerSubtitle}>
          Memahami hubungan antara sisi dan sudut pada segitiga serta penerapan rumus trigonometri
        </p>
      </header>

      <main style={styles.content}>
        {/* Pengertian Trigonometri */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pengertian Trigonometri</h2>
          <p style={styles.paragraph}>
            Trigonometri adalah cabang ilmu dalam Matematika yang mempelajari hubungan antara sisi dan sudut pada segitiga. 
            Hubungan tersebut biasanya dinyatakan sebagai perbandingan sinus, kosinus, dan tangen. 
            Dengan perbandingan ini, kamu bisa dengan mudah menentukan panjang sisi segitiga meskipun hanya diketahui panjang salah satu sisi dan sudutnya saja.
          </p>
        </section>

        {/* Jenis-Jenis Trigonometri */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Jenis-Jenis Trigonometri</h2>
          <p style={styles.paragraph}>
            Perbandingan dasar trigonometri terdiri dari sinus, kosinus, dan tangen. Dari perbandingan tersebut, akan muncul perbandingan lain seperti kosekan, sekan, dan kotangen. 
            Berikut adalah penjelasan lebih lanjut.
          </p>

          <div style={styles.exampleBox}>
            <h3 style={styles.exampleTitle}>Sinus</h3>
            <p style={styles.paragraph}>
              Sinus atau bisa disingkat sin adalah perbandingan antara panjang sisi di depan sudut dan panjang sisi miring.
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>sin(θ) = opposite / hypotenuse</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.exampleTitle}>Kosinus</h3>
            <p style={styles.paragraph}>
              Kosinus atau biasa disebut cos adalah perbandingan antara panjang sisi di samping sudut dan panjang sisi miring.
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>cos(θ) = adjacent / hypotenuse</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.exampleTitle}>Tangen</h3>
            <p style={styles.paragraph}>
              Tangen atau biasa disebut tan adalah perbandingan antara panjang sisi di depan sudut dan panjang sisi di samping sudut.
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>tan(θ) = opposite / adjacent</p>
          </div>
        </section>

        {/* Perbandingan Lain */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Perbandingan Lain</h2>
          <div style={styles.exampleBox}>
            <h3 style={styles.exampleTitle}>Kosekan</h3>
            <p style={styles.paragraph}>
              Kosekan adalah perbandingan antara panjang sisi miring segitiga dan panjang sisi di depan sudut. Kosekan merupakan kebalikan dari sinus. 
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>csc(θ) = hypotenuse / opposite</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.exampleTitle}>Sekan</h3>
            <p style={styles.paragraph}>
              Sekan adalah perbandingan antara panjang sisi miring segitiga dan panjang sisi di samping sudut. Sekan merupakan kebalikan dari kosinus. 
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>sec(θ) = hypotenuse / adjacent</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.exampleTitle}>Kotangen</h3>
            <p style={styles.paragraph}>
              Kotangen adalah perbandingan antara panjang sisi di samping sudut dan panjang sisi di depan sudut. Kotangen merupakan kebalikan dari tangen. 
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>cot(θ) = adjacent / opposite</p>
          </div>
        </section>

        {/* Sudut Trigonometri */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Sudut Trigonometri</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Identitas</th>
                <th style={styles.tableHeader}>0°</th>
                <th style={styles.tableHeader}>30°</th>
                <th style={styles.tableHeader}>45°</th>
                <th style={styles.tableHeader}>60°</th>
                <th style={styles.tableHeader}>90°</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>sin(θ)</td>
                <td style={styles.tableCell}>0</td>
                <td style={styles.tableCell}>1/2</td>
                <td style={styles.tableCell}>√2/2</td>
                <td style={styles.tableCell}>√3/2</td>
                <td style={styles.tableCell}>1</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>cos(θ)</td>
                <td style={styles.tableCell}>1</td>
                <td style={styles.tableCell}>√3/2</td>
                <td style={styles.tableCell}>√2/2</td>
                <td style={styles.tableCell}>1/2</td>
                <td style={styles.tableCell}>0</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>tan(θ)</td>
                <td style={styles.tableCell}>0</td>
                <td style={styles.tableCell}>√3/3</td>
                <td style={styles.tableCell}>1</td>
                <td style={styles.tableCell}>√3</td>
                <td style={styles.tableCell}>undefined</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Aplikasi Trigonometri */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Aplikasi Trigonometri</h2>
          <p style={styles.paragraph}>
            Trigonometri memiliki berbagai aplikasi dalam kehidupan sehari-hari dan ilmu pengetahuan, antara lain:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Pengukuran jarak dan tinggi objek yang tidak dapat diukur langsung.</li>
            <li style={styles.listItem}>Perancangan struktur bangunan dan rekayasa teknik.</li>
            <li style={styles.listItem}>Analisis gerakan dalam fisika dan astronomi.</li>
            <li style={styles.listItem}>Navigasi dan pemetaan geografi.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Trigonometri;
