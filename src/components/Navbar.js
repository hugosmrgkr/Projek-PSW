import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          Matematika Kelas 10
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/materi-dasar">
                Materi Dasar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/latihan-soal">
                Latihan Soal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kuis">
                Kuis
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/statistik-belajar">
                Statistik Belajar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kontak">
                Kontak
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
