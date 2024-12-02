import React from "react";

const TransformasiGeometri = () => {
  const styles = {
    container: {
      maxWidth: "1000px",
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
    list: {
      listStyleType: "decimal",
      paddingLeft: "20px",
    },
    listItem: {
      margin: "5px 0",
    },
    exampleBox: {
      background: "#f9f9f9",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    },
    details: {
      marginTop: "10px",
    },
    summary: {
      fontWeight: "bold",
      color: "#0077b6",
      cursor: "pointer",
    },
    detailsParagraph: {
      margin: 0,
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Transformasi Geometri</h1>
        <p style={styles.headerSubtitle}>
          Pelajari pengertian, jenis-jenis, dan contoh soal transformasi geometri.
        </p>
      </header>

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

        {/* Video Pembelajaran */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>Video Penjelasan Transformasi Geometri</h2>
        <video width="600" controls>
          <source src="/videos/transformasi-geometri.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        {/* Jenis-jenis Transformasi Geometri */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Jenis-jenis Transformasi Geometri</h2>
          <ol style={styles.list}>
            {/* Translasi */}
            <li style={styles.listItem}>
              <strong>Translasi (Pergeseran)</strong>
              <p style={styles.paragraph}>
                Translasi adalah pergeseran suatu titik ke arah tertentu tanpa 
                mengubah bentuk atau ukuran bidangnya.
              </p>
              <div style={styles.exampleBox}>
                <strong>Contoh Soal:</strong>
                Tentukan bayangan titik A (2, 4) jika ditranslasikan menjadi (6, 3).
                <details style={styles.details}>
                  <summary style={styles.summary}>Lihat Pembahasan</summary>
                  <p style={styles.detailsParagraph}>
                    (x’, y’) = (x + a, y + b) → (2 + 6, 4 + 3) = (8, 7)
                    <br />
                    Bayangan: <strong>(8, 7)</strong>
                  </p>
                </details>
              </div>
            </li>

            {/* Rotasi */}
            <li style={styles.listItem}>
              <strong>Rotasi (Perputaran)</strong>
              <p style={styles.paragraph}>
                Rotasi adalah perputaran suatu titik atau bidang terhadap pusat rotasi 
                dengan jarak tetap. 
              </p>
              <div style={styles.exampleBox}>
                <strong>Contoh Soal:</strong>
                Rotasikan titik A (3, 2) terhadap titik O (0, 0) sejauh 90° searah jarum jam.
                <details style={styles.details}>
                  <summary style={styles.summary}>Lihat Pembahasan</summary>
                  <p style={styles.detailsParagraph}>
                    Rotasi 90°: (x’, y’) = (-y, x) → (-2, 3)
                    <br />
                    Bayangan: <strong>(-2, 3)</strong>
                  </p>
                </details>
              </div>
            </li>

            {/* Refleksi */}
            <li style={styles.listItem}>
              <strong>Refleksi (Pencerminan)</strong>
              <p style={styles.paragraph}>
                Refleksi adalah pencerminan suatu objek terhadap garis atau sumbu tertentu.
              </p>
              <div style={styles.exampleBox}>
                <strong>Contoh Soal:</strong>
                Tentukan bayangan titik A (4, -2) jika dicerminkan terhadap sumbu x.
                <details style={styles.details}>
                  <summary style={styles.summary}>Lihat Pembahasan</summary>
                  <p style={styles.detailsParagraph}>
                    (x, y) → (x, -y) → (4, 2)
                    <br />
                    Bayangan: <strong>(4, 2)</strong>
                  </p>
                </details>
              </div>
            </li>

            {/* Dilatasi */}
            <li style={styles.listItem}>
              <strong>Dilatasi (Perkalian)</strong>
              <p style={styles.paragraph}>
                Dilatasi adalah transformasi yang mengubah ukuran suatu objek berdasarkan 
                faktor skala tanpa mengubah bentuknya.
              </p>
              <div style={styles.exampleBox}>
                <strong>Contoh Soal:</strong>
                Dilatasikan titik A (2, 4) sebesar 3 kali dengan pusat di (-4, 2).
                <details style={styles.details}>
                  <summary style={styles.summary}>Lihat Pembahasan</summary>
                  <p style={styles.detailsParagraph}>
                    (x’, y’) = k(x - a) + a, k(y - b) + b → (32, 14)
                    <br />
                    Bayangan: <strong>(32, 14)</strong>
                  </p>
                </details>
              </div>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default TransformasiGeometri;
