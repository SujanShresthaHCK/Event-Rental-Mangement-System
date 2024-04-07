import React from 'react';
import {BsFillGrid3X3GapFill, BsBuilding, BsBoxArrowRight, BsGrid1X2Fill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          Hamro Banquet
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
          <BsGrid1X2Fill className='icon' />
          Dashboard
        </li>
        <li className='sidebar-list-item'>
          <BsFillGrid3X3GapFill className='icon' />
          Food categories
        </li>
        <li className='sidebar-list-item'>
          <BsBuilding className='icon' />
          Hall
        </li>
      
        <li className='sidebar-list-item'>
          <BsBoxArrowRight className='icon' />
          Logout
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;