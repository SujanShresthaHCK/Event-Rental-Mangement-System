import React, { useState } from 'react';
import './index.css';
import AdminHeader from '../components/AdminFood/AdminHeader'
import AdminSidebar from '../components/AdminFood/AdminSidebar'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';


function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminDashboard/>
    </div>
  );
}

export default Admin;