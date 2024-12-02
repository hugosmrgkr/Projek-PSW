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
  const [notification, setNotification] = useState({
    message: "",
    isVisible: false,
    isError: false,
  });

  const showNotification = (message, isError = false) => {
    setNotification({ message, isVisible: true, isError });
    setTimeout(() => {
      setNotification({ ...notification, isVisible: false });
    }, 3000);
  };

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
      setIsRegistering(false);
      setError("");
      showNotification(
        `Registration Successful! \nEmail: ${registeredUser.email}\nPassword: ${registeredUser.password}`,
        false
      );
    } else {
      setError("Please enter a valid email and password.");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (formData.email === registeredUser.email && formData.password === registeredUser.password) {
      setError("");
      setFormData({ email: "", password: "" });
      showNotification("Login successful! Redirecting...", false);
      setTimeout(() => navigate("/home"), 2000); // loading selama 2 detik
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg" style={{ maxWidth: "900px", width: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-6 bg-primary text-white p-4">
            <h2 className="mb-3 text-black">FORMA10</h2>
            <p>
              Matematika adalah langkah awal untuk memahami konsep-konsep yang lebih kompleks. Pada
              tahap ini, Anda akan belajar tentang aljabar, geometri, trigonometri, dan statistik.
            </p>
            <p>
              Topik penting meliputi persamaan linear, sistem persamaan, fungsi kuadrat, aturan sinus dan
              cosinus, hingga peluang dasar. Semua ini akan menjadi fondasi untuk pelajaran matematika yang
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
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">
                      Saya setuju dengan syarat dan ketentuan
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

            {/* Notifikasi Pop-up */}
            {notification.isVisible && (
              <div
                className={`mt-4 p-3 text-center ${
                  notification.isError ? "bg-danger text-white" : "bg-success text-white"
                }`}
                style={{
                  borderRadius: "5px",
                }}
              >
                <pre style={{ margin: 0 }}>{notification.message}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
