import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const Login = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({ email: '', password: '' });
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

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
      setError('');
      alert('Registration successful!');
    } else {
      setError('Please enter a valid email and password.');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === registeredUser.email &&
      formData.password === registeredUser.password
    ) {
      alert('Login berhasil!');
      setError('');
      setFormData({ email: '', password: '' });
      navigate('/home');  // Redirect to Home page
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        {isRegistering ? (
          <div>
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={registeredUser.email}
                  onChange={handleRegisterChange}
                  className="form-control"
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
                  required
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
              <button
                type="button"
                onClick={() => setIsRegistering(false)}
                className="btn btn-link w-100"
              >
                Already have an account? Login
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
                  required
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
              <button
                type="button"
                onClick={() => setIsRegistering(true)}
                className="btn btn-link w-100"
              >
                Don't have an account? Register
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
