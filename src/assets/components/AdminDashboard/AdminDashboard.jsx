import React from 'react';
import './AdminDashboard.css';
import { BiSolidPackage } from 'react-icons/bi';
import { BsPeopleFill, BsBuilding, BsCalendarEventFill } from 'react-icons/bs';

function AdminDashboard() {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
        <h1>Hello world</h1>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Events</h3>
            <BsCalendarEventFill className='card_icon'/>
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Packages</h3>
            <BiSolidPackage className='card_icon'/>
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total CUSTOMERS</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Hall</h3>
            <BsBuilding className='card_icon'/>
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='tables'>
        <div className='table'>
          <h2>Today's Booked Events</h2>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Hall Name</th>
                <th>Date</th>
                <th>Minimum</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows for Today's Booked Events here */}
            </tbody>
          </table>
        </div>
        <div className='table'>
          <h2>Recent Booked Events</h2>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Hall Name</th>
                <th>Date</th>
                <th>Minimum</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows for Recent Booked Events here */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;

