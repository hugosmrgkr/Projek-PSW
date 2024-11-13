import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="text-center">
      <h1>Selamat Datang di Matematika Kelas 10</h1>
      <p>Pelajari materi matematika dari dasar hingga lanjutan.</p>
      <Link to="/materi-dasar" className="btn btn-primary">Mulai Belajar</Link>
    </div>
  );
};

export default Home;
