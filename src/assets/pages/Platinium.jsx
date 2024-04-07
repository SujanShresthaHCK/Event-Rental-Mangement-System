import React, { useState } from 'react';

import PlatiniumMenu from "../components/PlatiniumMenu/PlatiniumMenu"

function Platinium() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      {/* <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <PlatiniumMenu />
    </div>
  );
}

export default Platinium;
