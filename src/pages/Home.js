import React from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "Eksponen dan Logaritma",
    description: "Pelajari dasar-dasar eksponen dan logaritma.",
    image: "/materi1.jpg",
  },
  {
    id: 2,
    title: "Barisan dan Deret Geometri",
    description: "Eksplorasi konsep barisan dan deret untuk pemahaman mendalam.",
    image: "/materi2.jpeg",
  },
  {
    id: 3,
    title: "Fungsi Kuadrat",
    description: "Pelajari konsep fungsi kuadrat secara visual dan menarik.",
    image: "/materi3.jpeg",
  },
];


const NewsCard = ({ title, description, image }) => (
  <div className="card">
    <img src={image} alt={title} className="card-img" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Gaya CSS */}
      <style>
        {`
          .text-center {
            text-align: center;
            margin: 20px;
          }

          .btn-primary {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            color: white;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1rem;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          /* Hero Section */
          .hero-section {
            background: url("/background.jpg") no-repeat center center/cover;
            height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
          }

          .hero-section h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin: 0;
          }

          .hero-section p {
            font-size: 1.2rem;
            margin-top: 10px;
          }

          /* Materi Section */
          .materi-section {
            padding: 50px 20px;
            background: #f9f9f9;
            text-align: center;
          }

          .materi-title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 30px;
          }

          .materi-cards-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
          }

          .card {
            width: 300px;
            background: white;
            border-radius: 10px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
          }

          .card:hover {
            transform: scale(1.05);
          }

          .card-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }

          .card-content {
            padding: 15px;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .card-description {
            font-size: 1rem;
            color: #555;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Selamat Datang di Matematika Kelas 10</h1>
        <p>Pelajari materi matematika dari dasar hingga lanjutan.</p>
      </div>

      {/* Materi Section */}
      <section className="materi-section">
        <h2 className="materi-title">Materi Yang Dipelajari</h2>
        <div className="materi-cards-container">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              description={news.description}
              image={news.image}
            />
          ))}
        </div>

        {/* Link "Mulai Belajar"  */}
        <Link to="/materi-dasar" className="btn-primary">
          Mulai Belajar
        </Link>
      </section>
    </div>
  );
};

export default Home;
