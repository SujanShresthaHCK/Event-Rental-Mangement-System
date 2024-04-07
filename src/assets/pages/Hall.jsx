import { useState } from 'react';
import AdminHeader from '../components/AdminFood/AdminHeader'
import AdminSidebar from '../components/AdminFood/AdminSidebar'
import AdminHall from '../components/AdminHall/AdminHall';

function Hall() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminHall/>
    </div>
  );
}

export default Hall;