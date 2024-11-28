import React from "react";

const BarisanDeret = () => {
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: "20px auto",
      padding: "20px",
      maxWidth: "600px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
    },
    title: {
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "20px",
    },
    paragraph: {
      lineHeight: "1.6",
      color: "#34495e",
    },
    list: {
      marginLeft: "20px",
      color: "#34495e",
    },
  };

  return (
    <div className="container mt-5 p-4 shadow rounded" style={styles.container}>
      <h2 className="text-center text-primary" style={styles.title}>
        Barisan dan Deret
      </h2>
      <p className="text-secondary" style={styles.paragraph}>
        Materi ini menjelaskan tentang barisan (urutan angka) dan deret (jumlah angka dalam barisan).
        <br />
        <strong>Barisan Aritmatika:</strong> Barisan dengan selisih yang tetap antara dua suku berturut-turut.
        <br />
        <strong>Barisan Geometri:</strong> Barisan dengan rasio yang tetap antara dua suku berturut-turut.
        <br />
        Beberapa contoh soal yang akan dibahas meliputi:
      </p>
      <ul className="text-secondary ms-4" style={styles.list}>
        <li>Mencari suku ke-n dalam barisan aritmatika dan geometri.</li>
        <li>Menjumlahkan deret aritmatika dan geometri.</li>
      </ul>
    </div>
  );
};

export default BarisanDeret;
