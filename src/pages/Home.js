import React from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: "eksponen-logaritma", 
    title: "Eksponen dan Logaritma",
    description: "Pelajari eksponen dan logaritma secara visual dan menarik.",
    image: "/materi1.jpg",
  },
  {
    id: "barisan-deret",
    title: "Barisan dan Deret",
    description: "Pelajari barisan dan deret secara visual dan menarik.",
    image: "/materi2.jpeg",
  },
  {
    id: "sistem-persamaan",
    title: "Sistem Persamaan Linear dan Kuadrat",
    description: "Pelajari sistem persamaan linear dan kuadrat secara visual dan menarik.",
    image: "/materi3.jpeg",
  },
  {
    id: "persamaan-kuadrat",
    title: "Persamaan Kuadrat",
    description: "Pelajari persamaan kuadrat secara visual dan menarik.",
    image: "/materi4.jpeg",
  },
  {
    id: "fungsi-kuadrat",
    title: "Fungsi Kuadrat",
    description: "Pelajari konsep fungsi kuadrat secara visual dan menarik.",
    image: "/materi5.jpg",
  },
  {
    id: "transformasi-geometri",
    title: "Transformasi Geometri",
    description: "Pelajari transformasi geometri secara visual dan menarik.",
    image: "/materi6.jpeg",
  },
  {
    id: "trigonometri",
    title: "Trigonometri",
    description: "Pelajari trigonometri secara visual dan menarik.",
    image: "/materi7.jpeg",
  },
  {
    id: "peluang-dasar",
    title: "Peluang Dasar",
    description: "Pelajari peluang dasar secara visual dan menarik.",
    image: "/materi8.jpeg",
  },
];


const NewsCard = ({ id, title, description, image }) => (
  <div className="card">
    <img src={image} alt={title} className="card-img" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Link to={`/materi/${id}`} className="btn-primary">
        Pelajari Selengkapnya
      </Link>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
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

      <div className="hero-section">
        <h1>Selamat Datang di FORMA10</h1>
        <p>Pelajari materi matematika bersama FORMA10.</p>
      </div>

      <section className="materi-section">
        <h2 className="materi-title">Materi Yang Dipelajari</h2>
        <div className="materi-cards-container">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id}
              title={news.title}
              description={news.description}
              image={news.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
