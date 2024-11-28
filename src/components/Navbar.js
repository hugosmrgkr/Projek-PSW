import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            background-color: #343a40;
            padding: 10px 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .navbar-brand {
            color: #ffffff;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 18px;
            text-decoration: none;
          }

          .navbar-nav .nav-link {
            color: #adb5bd;
            margin-right: 15px;
            font-size: 16px;
            font-weight: 500;
            transition: color 0.3s ease;
            text-decoration: none;
          }

          .navbar-nav .nav-link:hover {
            color: #ffffff;
          }

          .dropdown-menu {
            background-color: #343a40;
            border: none;
          }

          .dropdown-item {
            color: #adb5bd;
            font-size: 16px;
            transition: color 0.3s ease;
          }

          .dropdown-item:hover {
            color: #ffffff;
            background-color: #495057;
          }

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
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="materiDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Materi
                </Link>
                <ul className="dropdown-menu" aria-labelledby="materiDropdown">
                  <li className="dropdown-header">Semester 1</li>
                  <li>
                    <Link className="dropdown-item" to="/materi/eksponen-logaritma">
                      Eksponen dan Logaritma
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materi/barisan-deret">
                      Barisan dan Deret
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materi/sistem-persamaan-linear-kuadrat">
                      Sistem Persamaan Linear dan Kuadrat
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materi/persamaan-kuadrat">
                      Persamaan Kuadrat
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="dropdown-header">Semester 2</li>
                  <li>
                    <Link className="dropdown-item" to="/materi/fungsi-kuadrat">
                      Fungsi Kuadrat
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materi/transformasi-geometri">
                      Transformasi Geometri
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materi/trigonometri">
                      Trigonometri
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materi/peluang-dasar">
                      Peluang Dasar
                    </Link>
                  </li>
                </ul>
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
