import React, { useState } from 'react';
// import './index.css';
// import AdminHeader from '../components/AdminFood/AdminHeader'
// import AdminSidebar from '../components/AdminFood/AdminSidebar'
import GoldMenu from '../components/GoldMenu/GoldMenu';

function Gold() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      {/* <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <GoldMenu />
    </div>
  );
}

export default Gold;