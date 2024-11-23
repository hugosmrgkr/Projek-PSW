import React, { useState } from "react";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    alert("Pesan Anda berhasil dikirim!");
    setFormData({ name: "", email: "", phone: "", website: "", message: "" });
  };

  return (
    <div className="contact-container">
      <style>
        {`
          .contact-container {
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f9f9f9;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .contact-header {
            text-align: center;
            background-color: #333;
            color: white;
            padding: 10px;
            border-radius: 10px 10px 0 0;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
          }

          .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .form-control:focus {
            border-color: #007bff;
            outline: none;
          }

          .btn-primary {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }
        `}
      </style>
      <div className="contact-header">
        <h2>Kontak Kami</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama <span style={{ color: "red" }}>*</span></label>
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
          <label>Email <span style={{ color: "red" }}>*</span></label>
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
          <label>Nomor Kontak <span style={{ color: "red" }}>*</span></label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Nama Materi</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Pesan <span style={{ color: "red" }}>*</span></label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Kontak;
