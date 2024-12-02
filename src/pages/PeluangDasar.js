import React from "react";

const Peluang = () => {
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
      color: "#28a745",
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
      color: "#28a745",
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

        {/* Video Pembelajaran */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2>Video Penjelasan Peluang</h2>
          <video width="600" controls>
            <source src="/videos/peluang.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
