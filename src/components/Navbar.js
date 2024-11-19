import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>
        {`
          /* Styling untuk Navbar */
          .navbar {
            background-color: #343a40; /* Warna latar gelap */
            padding: 10px 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          /* Styling untuk teks brand */
          .navbar-brand {
            color: #ffffff; /* Warna putih */
            font-weight: bold;
            text-transform: uppercase;
            font-size: 18px;
            text-decoration: none;
          }

          /* Styling untuk navbar link */
          .navbar-nav .nav-link {
            color: #adb5bd; /* Warna abu-abu muda */
            margin-right: 15px;
            font-size: 16px;
            font-weight: 500;
            transition: color 0.3s ease;
            text-decoration: none;
          }

          /* Hover efek untuk link */
          .navbar-nav .nav-link:hover {
            color: #ffffff; /* Putih saat hover */
          }

          /* Styling untuk tombol Login */
          .navbar-nav .nav-link:last-child {
            background-color: #00bcd4; /* Warna biru */
            color: #ffffff;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          /* Hover efek untuk tombol Login */
          .navbar-nav .nav-link:last-child:hover {
            background-color: #018c9b; /* Warna biru lebih gelap */
          }

          /* Responsif: navbar-toggler */
          .navbar-toggler {
            border: none;
          }

          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg">
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
    </>
  );
};

export default Navbar;
