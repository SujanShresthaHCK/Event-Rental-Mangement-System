import React, { useState } from 'react';
import AdminFood from '../components/AdminFood/AdminFood'

function Food() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    return (
      <div>
        <AdminFood />
      </div>
    );
  }
  
  export default Food;