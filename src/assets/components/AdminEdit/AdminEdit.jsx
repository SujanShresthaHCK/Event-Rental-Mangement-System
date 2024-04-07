// AdminEdit.jsx
import React, { useState } from 'react';
import './AdminEdit.css';

function AdminEdit({ hallId, hallName, capacity, onSave }) {
  const [editedHallId, setEditedHallId] = useState(hallId);
  const [editedHallName, setEditedHallName] = useState(hallName);
  const [editedCapacity, setEditedCapacity] = useState(capacity);

  const handleHallIdChange = (event) => {
    setEditedHallId(event.target.value);
  };

  const handleHallNameChange = (event) => {
    setEditedHallName(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setEditedCapacity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedHallId, editedHallName, editedCapacity);
  };

  return (
    <div className="form-container">
      <h2>Edit Hall</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="editedHallId">Hall ID:</label>
          <input
            type="text"
            id="editedHallId"
            value={editedHallId}
            onChange={handleHallIdChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editedHallName">Hall Name:</label>
          <input
            type="text"
            id="editedHallName"
            value={editedHallName}
            onChange={handleHallNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editedCapacity">Capacity:</label>
          <input
            type="text"
            id="editedCapacity"
            value={editedCapacity}
            onChange={handleCapacityChange}
          />
        </div>
        <button type="submit" className="submit-button">Save</button>
      </form>
    </div>
  );
}

export default AdminEdit;

