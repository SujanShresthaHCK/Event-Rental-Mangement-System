import React, { useState } from 'react';
import AdminHeader from '../components/AdminFood/AdminHeader'
import AdminSidebar from '../components/AdminFood/AdminSidebar'
import AdminFood from '../components/AdminFood/AdminFood'

function Food() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    return (
      <div className='grid-container'>
        <AdminHeader OpenSidebar={OpenSidebar}/>
        <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <AdminFood />
      </div>
    );
  }
  
  export default Food;