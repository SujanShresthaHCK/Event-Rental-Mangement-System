import React from 'react';
import './Hall.css';

const AdminHall = () => {
  return (
    <section className="hall-wrapper">
      <h1 className="hall-title">Halls</h1>
      <table className="hall-table">
        <thead>
          <tr>
            <th>Hall ID</th>
            <th>Hall Name</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hall Kathmandu</td>
            <td>600 - 1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Hall Bhaktapur</td>
            <td>450 - 800</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hall Kritipur</td>
            <td>100 - 250</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hall Patan</td>
            <td>200 - 500</td>
          </tr>
        </tbody>
      </table>
      <div className="hall-actions">
        <button className="button add-button">Add</button>
        <button className="button edit-button">Edit</button>
        <button className="button remove-button">Remove</button>
      </div>
    </section>
  );
};

export default AdminHall;

