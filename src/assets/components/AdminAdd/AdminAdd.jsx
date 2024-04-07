// AdminAdd.jsx
import React, { useState } from 'react';
import './AdminAdd.css';

function AdminAdd() {
  const [hallId, setHallId] = useState('');
  const [hallName, setHallName] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleHallIdChange = (event) => {
    setHallId(event.target.value);
  };

  const handleHallNameChange = (event) => {
    setHallName(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hall ID:', hallId);
    console.log('Hall Name:', hallName);
    console.log('Capacity:', capacity);
    setHallId('');
    setHallName('');
    setCapacity('');
  };

  return (
    <div className="form-container">
      <h2>Add New Hall</h2>
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
        <div className="form-group">
          <label htmlFor="hallName">Hall Name:</label>
          <input
            type="text"
            id="hallName"
            value={hallName}
            onChange={handleHallNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="text"
            id="capacity"
            value={capacity}
            onChange={handleCapacityChange}
          />
        </div>
        <button type="submit" className="submit-button">Add</button>
      </form>
    </div>
  );
}

export default AdminAdd;


