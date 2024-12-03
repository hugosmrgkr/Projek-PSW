import React from "react";

const Peluang = () => {
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
    videoContainer: {
      textAlign: "center",
      marginBottom: "40px", // Increased bottom margin for video section
      padding: "20px",
      background: "#f5e6d3", // Coklat muda untuk latar belakang video
      borderRadius: "12px",
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
    soalContainer: {
      background: "#f5e6d3", // Latar belakang coklat muda untuk soal
      borderLeft: "5px solid #d1b097", // Garis kiri coklat muda
      padding: "15px",
      borderRadius: "8px",
    },
    pembahasan: {
      marginTop: "15px",
    },
    summary: {
      fontWeight: "bold",
      color: "#6d4c41", // Coklat tua untuk summary
      cursor: "pointer",
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
        <h1 style={styles.headerTitle}>Peluang</h1>
        <p style={styles.headerSubtitle}>
          Pelajari konsep, rumus, dan contoh soal peluang secara mendalam.
        </p>
      </header>

      <main style={styles.content}>
        {/* Pengertian Peluang */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pengertian Peluang</h2>
          <p style={styles.paragraph}>
            Peluang adalah seberapa besar kemungkinan suatu kejadian terjadi
            dibandingkan dengan seluruh kemungkinan kejadian yang ada. Konsep
            ini digunakan dalam berbagai aspek kehidupan, mulai dari permainan
            hingga investasi.
          </p>
        </section>

        {/* Video */}
        <div style={styles.videoContainer}>
          <h2 style={styles.sectionTitle}>Video Penjelasan Peluang</h2>
          <iframe
            width="70%"
            height="400"
            src="https://www.youtube.com/embed/BqM9SbVyt0w"
            title="Video Penjelasan Transformasi Geometri"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Konsep Peluang */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Konsep Peluang</h2>
          <ol style={styles.list}>
            {/* Ruang Sampel */}
            <li style={styles.listItem}>
              <strong>Ruang Sampel</strong>
              <p style={styles.paragraph}>
                Ruang sampel adalah kumpulan semua kemungkinan hasil dari suatu
                percobaan. Contohnya, jika melempar dadu, ruang sampelnya adalah
                {` {1, 2, 3, 4, 5, 6}`}.
              </p>
            </li>

            {/* Titik Sampel */}
            <li style={styles.listItem}>
              <strong>Titik Sampel</strong>
              <p style={styles.paragraph}>
                Titik sampel adalah elemen terkecil dalam ruang sampel yang
                tidak dapat dibagi lagi, seperti "kepala" dan "ekor" pada
                pelemparan koin.
              </p>
            </li>

            {/* Kejadian */}
            <li style={styles.listItem}>
              <strong>Kejadian</strong>
              <p style={styles.paragraph}>
                Kejadian adalah hasil tertentu dari percobaan, seperti
                "mendapatkan angka ganjil" saat melempar dadu.
              </p>
            </li>
          </ol>
        </section>

        {/* Rumus Peluang */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Rumus Peluang</h2>
          <div style={styles.exampleBox}>
            <p style={styles.paragraph}>
              <strong>Rumus:</strong> P(A) = n(A) / n(S)
            </p>
            <p style={styles.paragraph}>
              Dimana:
              <ul>
                <li>P(A): Peluang kejadian A</li>
                <li>n(A): Jumlah titik sampel kejadian A</li>
                <li>n(S): Jumlah total titik sampel</li>
              </ul>
            </p>
          </div>
        </section>

        {/* Contoh Soal */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contoh Soal</h2>
          <ol style={styles.list}>
            <li style={styles.listItem}>
              <strong>Contoh 1:</strong> Dalam sebuah kotak terdapat 5 bola merah dan
              3 bola biru. Tentukan peluang mengambil bola merah.
              <details style={styles.details}>
                <summary style={styles.summary}>Lihat Pembahasan</summary>
                <p style={styles.detailsParagraph}>
                  P = 5 / (5 + 3) = 5 / 8 = 0.625 atau 62.5%
                </p>
              </details>
            </li>

            <li style={styles.listItem}>
              <strong>Contoh 2:</strong> Dalam kelas terdapat 15 siswa, 6 di antaranya
              perempuan. Peluang terpilih siswa laki-laki?
              <details style={styles.details}>
                <summary style={styles.summary}>Lihat Pembahasan</summary>
                <p style={styles.detailsParagraph}>
                  P = 9 / 15 = 0.6 atau 60%
                </p>
              </details>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Peluang;
