import React, { useState } from 'react';
import './Hall.css';

const AdminHall = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false);
  const [hallIdToRemove, setHallIdToRemove] = useState('');


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
      <h2 className="hall-title11">Booking halls</h2>
    <table className="hall-status-table">
      <thead>
        <tr>
          <th>Hall ID</th>
          <th>Hall Name</th>
          <th>Capacity</th>
        </tr>
      </thead>
      <tbody>
        {/* Add your rows with hall data and status here */}
      </tbody>
    </table>
      {isAddPopupOpen && (
        <div className="popup popup-add">
          <div className="popup-content">
            <span className="close-button" onClick={closeAddPopup}>✕</span>
            <h2>Add New Hall</h2>
            <form>
              <label htmlFor="hallId">Hall ID:</label>
              <input type="text" id="hallId" name="hallId" />

              <label htmlFor="hallName">Hall Name:</label>
              <input type="text" id="hallName" name="hallName" />

              <label htmlFor="capacity">Capacity:</label>
              <input type="text" id="capacity" name="capacity" />

              <label htmlFor="status">Status:</label>
              <input type="text" id="status" name="status" />

              <button type="submit" className="button submit-button">Add</button>
            </form>
          </div>
        </div>
      )}
      {isEditPopupOpen && (
        <div className="popup popup-edit">
          <div className="popup-content">
            <span className="close-button" onClick={closeEditPopup}>✕</span>
            <h2>Edit Hall</h2>
            <form>
            <label htmlFor="hallId">Hall ID:</label>
              <input type="text" id="hallId" name="hallId" />

              <label htmlFor="hallName">Hall Name:</label>
              <input type="text" id="hallName" name="hallName" />

              <label htmlFor="capacity">Capacity:</label>
              <input type="text" id="capacity" name="capacity" />

              <label htmlFor="status">Status:</label>
              <input type="text" id="status" name="status" />

              <button type="submit" className="button submit-button">Save</button>
            </form>
          </div>
        </div>
      )}
      {isRemovePopupOpen && (
        // Popup for removing a hall
        <div className="popup popup-remove">
          <div className="popup-content">
            <span className="close-button" onClick={closeRemovePopup}>✕</span>
            <h2>Remove Hall</h2>
            <form onSubmit={handleRemoveHall}>
              <label htmlFor="hallIdToRemove">Hall ID:</label>
              <input
                type="text"
                id="hallIdToRemove"
                name="hallIdToRemove"
                value={hallIdToRemove}
                onChange={(e) => setHallIdToRemove(e.target.value)}
                required
              />
              <button type="submit" className="button submit-button">Confirm</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminHall;


