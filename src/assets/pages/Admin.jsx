import React, { useState } from 'react';
import AdminHeader from '../components/AdminFood/AdminHeader'
import AdminSidebar from '../components/AdminFood/AdminSidebar'
import { Outlet } from 'react-router-dom'


function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      <Outlet />
    </div>
  );
}

export default Admin;