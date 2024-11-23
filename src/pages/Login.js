import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

const Login = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisteredUser({ ...registeredUser, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registeredUser.email && registeredUser.password) {
      setIsRegistering(false); // Pindah ke login setelah berhasil register
      setError("");
      alert("Registration successful! Please log in.");
    } else {
      setError("Please enter a valid email and password.");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (formData.email === registeredUser.email && formData.password === registeredUser.password) {
      alert("Login berhasil!");
      setError("");
      setFormData({ email: "", password: "" });
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg" style={{ maxWidth: "900px", width: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-6 bg-primary text-white p-4">
            <h2 className="mb-3">INFORMATION</h2>
            <p>
              Matematika kelas 10 adalah langkah awal untuk memahami konsep-konsep yang lebih kompleks. Pada
              tahap ini, Anda akan belajar tentang aljabar, geometri, trigonometri, dan statistik.
            </p>
            <p>
              Topik penting meliputi persamaan linear, sistem persamaan, fungsi kuadrat, aturan sinus dan
              cosinus, hingga peluang dasar. Semua ini akan menjadi fondasi untuk pelajaran matematika Yang
              lebih tinggi.
            </p>
            <button
              className="btn btn-outline-light w-100 mt-4"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Sudah Punya Akun? Gas Loginlah!" : "Tidak punya akun? Daftar lah"}
            </button>
          </div>

          <div className="col-md-6 p-4">
            {isRegistering ? (
              <div>
                <h2 className="text-center mb-4">Register Form</h2>
                <form onSubmit={handleRegisterSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={registeredUser.email}
                      onChange={handleRegisterChange}
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={registeredUser.password}
                      onChange={handleRegisterChange}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">
                      Saya setuju dengan syarat dan ketentuan lek
                    </label>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
