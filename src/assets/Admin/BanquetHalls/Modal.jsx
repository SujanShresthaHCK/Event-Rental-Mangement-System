import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ title, isOpen, onClose, onSubmit, formData: initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData || {});

  useEffect(() => {
    setFormData(initialFormData || {});
  }, [initialFormData]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
            <label>Capacity:</label>
            <input
              type="text"
              name="capacity"
              value={formData.capacity || ""}
              onChange={handleChange}
            />
            <label>Price per Shift:</label>
            <input
              type="text"
              name="priceShift"
              value={formData.priceShift || ""}
              onChange={handleChange}
            />
            <label>Price per Day:</label>
            <input
              type="text"
              name="priceDay"
              value={formData.priceDay || ""}
              onChange={handleChange}
            />
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
            />
            <div className="modal-footer">
              <button className="primarybtn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;


