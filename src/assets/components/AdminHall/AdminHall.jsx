import React, { useState } from 'react';
import './Hall.css';
import { FiCircle } from "react-icons/fi";

const AdminHall = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false);
  const [hallIdToRemove, setHallIdToRemove] = useState('');
  const [isKathmanduPopupOpen, setIsKathmanduPopupOpen] = useState(false); // New state for Kathmandu popup
  const [isBhaktapurPopupOpen, setIsBhaktapurPopupOpen] = useState(false); // New state for Bhaktapur popup

  const openAddPopup = () => {
    setIsAddPopupOpen(true);
  };

  const closeAddPopup = () => {
    setIsAddPopupOpen(false);
  };

  const openEditPopup = () => {
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
  };

  const openRemovePopup = () => {
    setIsRemovePopupOpen(true);
  };

  const closeRemovePopup = () => {
    setIsRemovePopupOpen(false);
    setHallIdToRemove('');
  };

  const handleRemoveHall = (e) => {
    e.preventDefault();
    // call the backend Api to remove hall here
    console.log(`Removing hall with ID: ${hallIdToRemove}`);
    closeRemovePopup();
  };

  const handleKathmanduPopup = () => {
    setIsKathmanduPopupOpen(true);
  };

  const handleBhaktapurPopup = () => {
    setIsKathmanduPopupOpen(true);
  };
  
  const closeKathmanduPopup = () => {
    setIsKathmanduPopupOpen(false);
  };

  const closeBhaktapurPopup = () => {
    setIsBhaktapurPopupOpen(false);
  };

  return (
    <section className="hall-wrapper">
      <h1 className="hall-title">Halls</h1>
      <table className="hall-table">
        <thead>
          <tr>
            <th>Hall ID</th>
            <th>Hall Name</th>
            <th>Capacity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hall Kathmandu</td>
            <td>600 - 1000</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hall Bhaktapur</td>
            <td>450 - 800</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hall Kritipur</td>
            <td>100 - 250</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hall Patan</td>
            <td>200 - 500</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>

      <div className="hall-actions">
        <button className="button add-button" onClick={openAddPopup}>Add</button>
        <button className="button edit-button" onClick={openEditPopup}>Edit</button>
        <button className="button remove-button" onClick={openRemovePopup}>Remove</button>
      </div>

      <h2 className="hall-title11">Event Category</h2>

      <div className="category-buttons">
        <button className="button category-button" onClick={handleKathmanduPopup}>
          Kathmandu
        </button>
        <button className="button category-button" onClick={() => console.log('Category clicked: Bhaktapur')}>
          Bhaktapur
        </button>
        <button className="button category-button" onClick={() => console.log('Category clicked: Kritipur')}>
          Kritipur
        </button>
        <button className="button category-button" onClick={() => console.log('Category clicked: Patan')}>
          Patan
        </button>
      </div>

      {/* Kathmandu Popup */}
      {isKathmanduPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closeKathmanduPopup}>✕</span>
            <h2>Hall Kathmandu Details</h2>
            <tr>Wedding </tr>
            <tr>Bratabanda </tr>

            {/* Add details of Kathmandu category here */}
          </div>
        </div>
      )}

      {/* Bhaktapur Popup */}
      {isBhaktapurPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closeBhaktapurPopup}>✕</span>
            <h2>Hall Bhaktapur Details</h2>
            {/* Add details of Bhaktapur category here */}
          </div>
        </div>
      )}

      {/* Add popups and other components */}
    </section>
  );
};

export default AdminHall;
