import React, { useState } from 'react';
// import './index.css';
// import AdminHeader from '../components/AdminFood/AdminHeader'
// import AdminSidebar from '../components/AdminFood/AdminSidebar'
import AdminAdd from '../components/AdminAdd/AdminAdd';

function Add() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      {/* <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <AdminAdd />
    </div>
  );
}

export default Add;