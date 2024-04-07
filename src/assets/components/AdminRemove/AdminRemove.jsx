// AdminRemove.jsx
import React, { useState } from 'react';
import './AdminRemove.css';

function AdminRemove({ onRemove }) {
  const [hallId, setHallId] = useState('');

  const handleHallIdChange = (event) => {
    setHallId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRemove(hallId);
  };

  return (
    <div className="form-container">
      <h2>Remove Hall</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hallId">Hall ID:</label>
          <input
            type="text"
            id="hallId"
            value={hallId}
            onChange={handleHallIdChange}
          />
        </div>
        <button type="submit" className="submit-button">Remove</button>
      </form>
    </div>
  );
}

export default AdminRemove;


