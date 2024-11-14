import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MateriDasar from './pages/MateriDasar';

import LatihanSoal from './pages/LatihanSoal';
import Kuis from './pages/Kuis';
import PembahasanKuis from './pages/PembahasanKuis';
import StatistikBelajar from './pages/StatistikBelajar';
import Kontak from './pages/Kontak';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './styles/App.css';

function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <div className="container mt-3">{children}</div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/materi-dasar" element={<MateriDasar />} />
          
          <Route path="/latihan-soal" element={<LatihanSoal />} />
          <Route path="/kuis" element={<Kuis />} />
          <Route path="/pembahasan-kuis" element={<PembahasanKuis />} />
          <Route path="/statistik-belajar" element={<StatistikBelajar />} />
          <Route path="/kontak" element={<Kontak />} />
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
