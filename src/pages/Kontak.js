import React, { useState } from "react";

const Kontak = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    alert("Pesan Anda berhasil dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h2>Kontak</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label>Pesan</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Kontak;
