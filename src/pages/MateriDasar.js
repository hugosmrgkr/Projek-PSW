import React, { useState } from "react";

const MateriDasar = () => {
  const [selectedMateri, setSelectedMateri] = useState(null);
  const [showVideo, setShowVideo] = useState(false); // New state for toggling video visibility

  const handleMateriClick = (index) => {
    setSelectedMateri(selectedMateri === index ? null : index);
  };

  const handleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "40px 20px",
      fontFamily: '"Poppins", sans-serif',
      color: "#2C3E50",
      background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // Lembut dengan gradien
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "20px",
      color: "#34495e",
    },
    description: {
      fontSize: "1.2rem",
      textAlign: "center",
      marginBottom: "30px",
      color: "#7f8c8d",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
    },
    card: {
      background: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.03)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "15px 20px",
      textAlign: "left",
    },
    cardTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#2C3E50",
    },
    expandedText: {
      marginTop: "10px",
      padding: "15px",
      background: "#f8f9fa",
      borderRadius: "10px",
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#34495e",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
      whiteSpace: "pre-wrap",
    },
    button: {
      display: "block",
      margin: "30px auto",
      padding: "12px 25px",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#fff",
      backgroundColor: "#3498db",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#2980b9",
    },
    videoContainer: {
      marginTop: "40px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      fontSize: "1.2rem",
      color: "#34495e",
    },
  };
  

  const materiData = [
    {
      title: "Bab Eksponen dan Logaritma",
      detail: `
        **Eksponen**:
        - Digunakan untuk menyatakan perkalian berulang dari bilangan yang sama. Contohnya: \(2^3 = 2 \\times 2 \\times 2 = 8\).
        - Sifat eksponen meliputi penjumlahan, pengurangan pangkat, dan aturan akar.

        **Logaritma**:
        - Adalah kebalikan dari eksponen. Contoh: Jika \(10^2 = 100\), maka \(\log_{10}(100) = 2\).
        - Sifat logaritma mencakup penjumlahan logaritma, logaritma pecahan, dan perubahan basis.
      `,
      image: "/Eksponen.jpeg",
      videoID: "lScgN1qnirY", // Ganti dengan ID video YouTube
    },
    {
      title: "Bab Barisan dan Deret",
      detail: `
        "Barisan":
        - Susunan angka dengan pola tertentu. Contoh: \(2, 4, 6, 8, \\dots\) adalah barisan aritmetika dengan beda \(2\).

        "Deret":
        - Penjumlahan suku-suku dalam suatu barisan. Contoh: \(2 + 4 + 6 + \\dots\).

        "Jenis Barisan":
        - Aritmetika: Pola kenaikan/penurunan tetap.
        - Geometri: Pola kenaikan/penurunan dengan rasio tetap.
      `,
      image: "/Barisan.jpeg",
      videoID: "xNKM97TyG6c", // Ganti dengan ID video YouTube
    },
    {
      title: "Bab Fungsi Kuadrat",
      detail: `
        **Fungsi Kuadrat**:
        - Bentuk umum: \(y = ax^2 + bx + c\).
        - Grafiknya berupa parabola.

        **Ciri-Ciri**:
        - Arah parabola ditentukan oleh tanda \(a\) (positif ke atas, negatif ke bawah).
        - Titik puncak (\(vertex\)) adalah nilai maksimum atau minimum fungsi.

        **Aplikasi**:
        - Digunakan untuk memodelkan lintasan benda, menghitung keuntungan maksimum, atau meramalkan data.
      `,
      image: "/Kuadrat.jpeg",
      videoID: "IcQAjHTW5z8", // Ganti dengan ID video YouTube
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Materi Dasar Matematika Kelas 10</h1>
      <p style={styles.description}>
        Pelajari berbagai topik dasar matematika dengan penjelasan menarik dan
        mudah dipahami!
      </p>
      <div style={styles.grid}>
        {materiData.map((materi, index) => (
          <div
            key={index}
            style={
              selectedMateri === index
                ? { ...styles.card, ...styles.cardHover }
                : styles.card
            }
            onClick={() => handleMateriClick(index)}
          >
            <img
              src={materi.image}
              alt={materi.title}
              style={styles.cardImage}
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{materi.title}</h3>
              {selectedMateri === index && (
                <div style={styles.expandedText}>
                  <pre style={{ whiteSpace: "pre-wrap" }}>
                    {materi.detail}
                  </pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Button to show/hide videos */}
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
        onClick={handleShowVideo}
      >
        Pelajari Lebih Lanjut
      </button>

      {/* Show video section when button is clicked */}
      {showVideo && (
        <div style={styles.videoContainer}>
          {materiData.map((materi, index) => (
            <div key={index}>
              <h3>{materi.title}</h3>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${materi.videoID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MateriDasar;
