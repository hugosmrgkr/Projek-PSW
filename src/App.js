import React from "react";
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MateriDasar from "./pages/MateriDasar";
import Kuis from "./pages/Kuis";
import StatistikBelajar from "./pages/StatistikBelajar";
import Kontak from "./pages/Kontak";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { ScoreProvider } from "./components/ScoreContext"; // Impor ScoreProvider
import "./styles/App.css";

import EksponenLogaritma from "./pages/EksponenLogaritma";
import FungsiKuadrat from "./pages/FungsiKuadrat";
import BarisanDeret from "./pages/BarisanDeret";
import Trigonometri from "./pages/Trigonometri";
import SistemPersamaan from "./pages/SistemPersamaan";
import TransformasiGeometri from "./pages/TransformasiGeometri";
import PeluangDasar from "./pages/PeluangDasar";
import PersamaanKuadrat from "./pages/PersamaanKuadrat";

function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <div className="container mt-3">{children}</div>
    </>
  );
}

function App() {
  return (
    <ScoreProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/home" element={<Home />} />
            <Route path="/materi-dasar" element={<MateriDasar />} />

            <Route path="/materi/eksponen-logaritma" element={<EksponenLogaritma />} />
            <Route path="/materi/fungsi-kuadrat" element={<FungsiKuadrat />} />
            <Route path="/materi/barisan-deret" element={<BarisanDeret />} />
            <Route path="/materi/trigonometri" element={<Trigonometri />} />
            <Route path="/materi/sistem-persamaan" element={<SistemPersamaan />} />
            <Route path="/materi/transformasi-geometri" element={<TransformasiGeometri />} />
            <Route path="/materi/peluang-dasar" element={<PeluangDasar />} />
            <Route path="/materi/persamaan-kuadrat" element={<PersamaanKuadrat />} />

            <Route path="/kuis" element={<Kuis />} />
            <Route path="/statistik-belajar" element={<StatistikBelajar />} />
            <Route path="/kontak" element={<Kontak />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </ScoreProvider>
  );
}

export default App;
