import React, { useState } from "react";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState({
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

    // Set preview data to current form data
    setPreviewData(formData);

    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", website: "", message: "" });

    // Tampilkan preview setelah kirim
    setShowPreview(true);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="contact-page">
      <style>
        {`
          .contact-page {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            padding: 40px;
            font-family: Arial, sans-serif;
          }

          .contact-container {
            max-width: 600px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
          }

          .contact-header {
            text-align: center;
            background-color: #333;
            color: white;
            padding: 15px;
            border-radius: 8px 8px 0 0;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 8px;
            font-size: 14px;
          }

          .form-control {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            box-sizing: border-box;
          }

          .form-control:focus {
            border-color: #007bff;
            outline: none;
          }

          .btn-primary {
            display: block;
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 10px;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          .preview-container {
            flex: 1;
            max-width: 400px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.5s ease;
            background-color: #f9f9f9;
          }

          .preview-container.show {
            opacity: 1;
            transform: translateX(0);
          }

          .preview-header {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
            text-align: center;
            color: #333;
            background-color: #007bff;
            color: white;
            padding: 10px;
            border-radius: 8px;
          }

          @keyframes fadeInScale {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Form Container */}
      <div className="contact-container">
        <div className="contact-header">
          <h2>Kontak Kami</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Nama <span style={{ color: "red" }}>*</span>
            </label>
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
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
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
            <label>
              Nomor Kontak <span style={{ color: "red" }}>*</span>
            </label>
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
            <label>
              Pesan <span style={{ color: "red" }}>*</span>
            </label>
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
          <button
            type="button"
            onClick={togglePreview}
            className="btn-primary"
            style={{ backgroundColor: "#28a745" }}
          >
            {showPreview ? "Sembunyikan Preview" : "Lihat Preview"}
          </button>
        </form>
      </div>

      {/* Preview Container */}
      <div className={`preview-container ${showPreview ? "show" : ""}`}>
        <div className="preview-header">Preview Pesan Anda</div>
        <div className="preview-item">
          <strong>Nama:</strong>
          <span>{previewData.name}</span>
        </div>
        <div className="preview-item">
          <strong>Email:</strong>
          <span>{previewData.email}</span>
        </div>
        <div className="preview-item">
          <strong>Nomor Kontak:</strong>
          <span>{previewData.phone}</span>
        </div>
        <div className="preview-item">
          <strong>Nama Materi:</strong>
          <span>{previewData.website}</span>
        </div>
        <div className="preview-item">
          <strong>Pesan:</strong>
          <span>{previewData.message}</span>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
