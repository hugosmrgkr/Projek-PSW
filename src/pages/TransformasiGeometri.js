import React from "react";

const TransformasiGeometri = () => {
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

  const soalData = [
    {
      jenis: "Translasi (Pergeseran)",
      deskripsi:
        "Translasi adalah pergeseran suatu titik ke arah tertentu tanpa mengubah bentuk atau ukuran bidangnya.",
      soal: "Tentukan bayangan titik A (2, 4) jika ditranslasikan menjadi (6, 3).",
      pembahasan:
        "(x’, y’) = (x + a, y + b) → (2 + 6, 4 + 3) = (8, 7). Bayangan: (8, 7).",
    },
    {
      jenis: "Rotasi (Perputaran)",
      deskripsi:
        "Rotasi adalah perputaran suatu titik atau bidang terhadap pusat rotasi dengan jarak tetap.",
      soal: "Rotasikan titik A (3, 2) terhadap titik O (0, 0) sejauh 90° searah jarum jam.",
      pembahasan: "Gunakan formula rotasi untuk mendapatkan hasil: (-y, x). Hasil: (-2, 3).",
    },
    {
      jenis: "Refleksi (Pencerminan)",
      deskripsi:
        "Refleksi adalah pencerminan suatu objek terhadap garis atau sumbu tertentu.",
      soal: "Tentukan bayangan titik A (4, -2) jika dicerminkan terhadap sumbu x.",
      pembahasan: "Hasil refleksi: (x, -y). Bayangan: (4, 2).",
    },
    {
      jenis: "Dilatasi (Perkalian)",
      deskripsi:
        "Dilatasi adalah transformasi yang mengubah ukuran suatu objek berdasarkan faktor skala tanpa mengubah bentuknya.",
      soal: "Dilatasikan titik A (2, 4) sebesar 3 kali dengan pusat di (-4, 2).",
      pembahasan: "Gunakan formula dilatasi: D(x, y) = (kx + (1-k)c, ky + (1-k)d).",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Transformasi Geometri</h1>
        <p style={styles.headerSubtitle}>
          Pelajari pengertian, jenis-jenis, dan contoh soal transformasi geometri.
        </p>
      </header>

      {/* Konten */}
      <main style={styles.content}>
        {/* Pengertian */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pengertian Transformasi Geometri</h2>
          <p style={styles.paragraph}>
            Transformasi geometri adalah perubahan bentuk dari sebuah garis, sudut, ruang, 
            dan bidang. Dalam kehidupan sehari-hari, transformasi geometri sering digunakan 
            dalam seni dan desain arsitektur.
          </p>
        </section>

        {/* Video */}
        <div style={styles.videoContainer}>
          <h2 style={styles.sectionTitle}>Video Penjelasan Transformasi Geometri</h2>
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

        {/* Soal */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Jenis-jenis Transformasi Geometri</h2>
          <div style={styles.soalWrapper}>
            {soalData.map((item, index) => (
              <div
                key={index}
                style={styles.soalBox}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <h3 style={styles.jenis}>
                  {index + 1}. {item.jenis}
                </h3>
                <p style={styles.deskripsi}>{item.deskripsi}</p>
                <strong>Contoh Soal:</strong>
                <p>{item.soal}</p>
                <details style={styles.pembahasan}>
                  <summary style={styles.summary}>Lihat Pembahasan</summary>
                  <p style={styles.detailsParagraph}>{item.pembahasan}</p>
                </details>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TransformasiGeometri;
