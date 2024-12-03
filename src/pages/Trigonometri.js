import React from "react";

const Trigonometri = () => {
  const styles = {
    container: {
      maxWidth: "90%", // Increase width to 90% of the screen, allowing more space
      margin: "20px auto", // Center the content with some space around it
      background: "#faf3e0", // Background coklat muda yang lembut
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      fontFamily: "'Poppins', sans-serif",
      color: "#333", // Teks gelap untuk kontras
    },
    header: {
      background: "#d1b097", // Coklat muda untuk header
      textAlign: "center",
      padding: "40px", // Increase padding for a more spacious header
    },
    headerTitle: {
      margin: 0,
      fontSize: "2.8rem", // Increase the font size of the header title
      fontWeight: "bold",
      color: "#ffffff",
    },
    headerSubtitle: {
      margin: "10px 0 0",
      fontSize: "1.3rem", // Slightly larger subtitle font size
      color: "#e1d7b9", // Teks abu-abu muda agar lebih soft
    },
    content: {
      padding: "30px", // Increase padding for more space around content
    },
    section: {
      marginBottom: "40px", // Increased bottom margin for sections
    },
    sectionTitle: {
      fontSize: "2rem", // Increased font size for section titles
      color: "#6d4c41", // Warna coklat tua untuk judul bagian
      marginBottom: "20px", // More space below section titles
      borderBottom: "2px solid #d1b097", // Garis bawah coklat muda
      paddingBottom: "5px",
    },
    paragraph: {
      margin: "15px 0", // Increased margin for paragraphs
      color: "#555", // Teks gelap dengan kontras tinggi
      textAlign: "justify",
    },
    exampleBox: {
      background: "#fff", // White background for each example box
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    exampleBoxHover: {
      transform: "scale(1.02)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    videoContainer: {
      textAlign: "center",
      marginBottom: "40px", // Increased bottom margin for video section
      padding: "20px",
      background: "#f5e6d3", // Coklat muda untuk latar belakang video
      borderRadius: "12px",
    },
    formula: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      color: "#6d4c41",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    tableHeader: {
      background: "#d1b097", // Coklat muda untuk header tabel
      color: "#fff",
      padding: "10px",
      border: "1px solid #d1b097",
    },
    tableCell: {
      padding: "10px",
      border: "1px solid #d1b097",
      textAlign: "center",
    },
    soalWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
    soalBox: {
      flex: "1 1 calc(48% - 20px)", // Responsif, set lebar 48% dengan jarak antar item
      background: "#ffffff", // Kotak soal dengan latar belakang putih
      color: "#333", // Teks gelap
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    soalBoxHover: {
      transform: "scale(1.02)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    jenis: {
      color: "#6d4c41", // Coklat tua untuk judul soal
      fontSize: "1.6rem", // Slightly larger font for the type of question
      marginBottom: "10px",
    },
    deskripsi: {
      fontSize: "1.1rem", // Larger font size for descriptions
      marginBottom: "20px", // More margin below descriptions
      textAlign: "justify",
      color: "#6d4c41", // Coklat untuk deskripsi
    },
    detailsParagraph: {
      marginTop: "10px",
      color: "#444", // Teks pembahasan dengan warna netral
      lineHeight: "1.6",
    },
    // Media Queries
    "@media (max-width: 768px)": {
      soalBox: {
        flex: "1 1 100%", // If the screen size is small, each box will take 100% width
      },
      headerTitle: {
        fontSize: "2.2rem", // Smaller font for mobile screens
      },
      headerSubtitle: {
        fontSize: "1.1rem", // Smaller subtitle font for mobile screens
      },
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

          <div style={styles.exampleBox}>
            <h3 style={styles.jenis}>Sinus</h3>
            <p style={styles.deskripsi}>
              Sinus atau bisa disingkat sin adalah perbandingan antara panjang sisi di depan sudut dan panjang sisi miring.
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>sin(θ) = sisi depan / sisi miring</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.jenis}>Kosinus</h3>
            <p style={styles.deskripsi}>
              Kosinus atau biasa disebut cos adalah perbandingan antara panjang sisi di samping sudut dan panjang sisi miring.
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>cos(θ) = sisi samping / sisi miring</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.jenis}>Tangen</h3>
            <p style={styles.deskripsi}>
              Tangen atau biasa disebut tan adalah perbandingan antara panjang sisi di depan sudut dan panjang sisi di samping sudut.
              Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>tan(θ) = sisi depan / sisi samping</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.jenis}>Kosekan</h3>
            <p style={styles.deskripsi}>
              Kosekan adalah kebalikan dari sinus. Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>cosec(θ) = 1 / sin(θ)</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.jenis}>Sekan</h3>
            <p style={styles.deskripsi}>
              Sekan adalah kebalikan dari kosinus. Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>sec(θ) = 1 / cos(θ)</p>
          </div>

          <div style={styles.exampleBox}>
            <h3 style={styles.jenis}>Kotonen</h3>
            <p style={styles.deskripsi}>
              Kotonen adalah kebalikan dari tangen. Secara matematis, dirumuskan sebagai:
            </p>
            <p style={styles.formula}>cot(θ) = 1 / tan(θ)</p>
          </div>
        </section>

        {/* Video */}
        <div style={styles.videoContainer}>
          <h2 style={styles.sectionTitle}>Video Penjelasan Trigonometri</h2>
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

        {/* Tabel Sudut Trigonometri */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tabel Sudut Trigonometri</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Sudut (°)</th>
                <th style={styles.tableHeader}>Sinus</th>
                <th style={styles.tableHeader}>Kosinus</th>
                <th style={styles.tableHeader}>Tangen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>0°</td>
                <td style={styles.tableCell}>0</td>
                <td style={styles.tableCell}>1</td>
                <td style={styles.tableCell}>0</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>30°</td>
                <td style={styles.tableCell}>1/2</td>
                <td style={styles.tableCell}>√3/2</td>
                <td style={styles.tableCell}>√3/3</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>45°</td>
                <td style={styles.tableCell}>1/2√2</td>
                <td style={styles.tableCell}>1/2√3</td>
                <td style={styles.tableCell}>1</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>60°</td>
                <td style={styles.tableCell}>1/2√3</td>
                <td style={styles.tableCell}>1/2</td>
                <td style={styles.tableCell}>√3</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>90°</td>
                <td style={styles.tableCell}>1</td>
                <td style={styles.tableCell}>1/2</td>
                <td style={styles.tableCell}>0</td>
              </tr>
              
              {/* Additional rows as needed */}
            </tbody>
          </table>
        </section>

         {/* Contoh Soal */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contoh Soal</h2>
          </section>

          {/* Soal 1 */}
          <div style={styles.exampleBox}>
            <p style={styles.paragraph}>
              <strong>Soal 1:</strong> Dari ΔABC diketahui sudut A = 120°, sudut
              B = 30° dan AC = 5 cm. Maka, panjang sisi BC adalah ….
              <br />
              A. 2 ½ cm <br />
              B. 5√2 cm <br />
              C. 5/2√2 cm <br />
              D. 5√2 cm <br />
              E. 5√3 cm
            </p>
            <details style={styles.details}>
              <summary>Lihat Pembahasan</summary>
              <p style={styles.detailsParagraph}>
                Diketahui, sudut A = 120°, sudut B = 30°, panjang AC = 5 cm.
                <br />
                Ditanyakan, panjang BC?
                <br />
                Dengan aturan sinus:
                <br />
                BC/sinA = AC/sinB
                <br />
                BC/sin120° = 5/sin30°
                <br />
                BC/½√3 = 5/½
                <br />
                BC = 5√3
                <br />
                Jawaban: <strong>E</strong>
              </p>
            </details>
          </div>

          {/* Soal 2 */}
          <div style={styles.exampleBox}>
            <p style={styles.paragraph}>
              <strong>Soal 2:</strong> Koordinat cartesius dari titik (2,210°)
              adalah …
              <br />
              A. (√3, -1) <br />
              B. (-√3, -1) <br />
              C. (1, -√3) <br />
              D. (-1, -√3) <br />
              E. (-1, √3)
            </p>
            <details style={styles.details}>
              <summary>Lihat Pembahasan</summary>
              <p style={styles.detailsParagraph}>
                Diketahui, r = 2, α = 210°
                <br />
                Ditanyakan, koordinat cartesius?
                <br />
                x = r cos α = 2 cos 210° = 2 × (-√3/2) = -√3
                <br />
                y = r sin α = 2 sin 210° = 2 × (-½) = -1
                <br />
                Jawaban: <strong>B</strong>
              </p>
            </details>
          </div>

          {/* Soal 3 */}
          <div style={styles.exampleBox}>
            <p style={styles.paragraph}>
              <strong>Soal 3:</strong> Himpunan penyelesaian dari persamaan
              trigonometri sin x = ½, untuk 0° ≤ x ≤ 180° adalah …
              <br />
              A. (45°, 150°) <br />
              B. (30°, 100°) <br />
              C. (45°, 100°) <br />
              D. (30°, 150°) <br />
              E. (30°, 120°)
            </p>
            <details style={styles.details}>
              <summary>Lihat Pembahasan</summary>
              <p style={styles.detailsParagraph}>
                Diketahui sin x = ½. Dari identitas:
                <br />
                sin x = sin 30°.
                <br />
                Solusi:
                <br />
                x = 30°, 150°.
                <br />
                Jawaban: <strong>D</strong>
              </p>
            </details>
          </div>

          {/* Soal 4 */}
          <div style={styles.exampleBox}>
            <p style={styles.paragraph}>
              <strong>Soal 4:</strong> Seorang anak berdiri di suatu tempat A
              di tepi sungai. Ia mengamati dua pohon, B dan C. Pohon B tepat
              berada di seberang A. Jarak BC = 8√6 meter, sudut BAC = 30°. Lebar
              sungai adalah …
              <br />
              A. 8/3√2 m <br />
              B. 8√2 m <br />
              C. 8√3 m <br />
              D. 24√2 m <br />
              E. 24√3 m
            </p>
            <details style={styles.details}>
              <summary>Lihat Pembahasan</summary>
              <p style={styles.detailsParagraph}>
                Dengan aturan sinus:
                <br />
                BC/sinA = AB/sinC
                <br />
                8√6/½ = AB/½√3
                <br />
                AB = 24√2 m
                <br />
                Jawaban: <strong>D</strong>
                </p>
                </details>
            </div>
          
    
      </main>
      
    </div>
  );
};

export default Trigonometri;