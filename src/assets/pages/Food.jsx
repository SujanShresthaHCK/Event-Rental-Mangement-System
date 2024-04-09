import React, { useState } from 'react';
import AdminFood from '../components/AdminFood/AdminFood'

function Food() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    return (
      <div className='grid-container'>
        <AdminFood />
      </div>
    );
  }
  
  export default Food;