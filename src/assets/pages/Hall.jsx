import { useState } from 'react';
import AdminHall from '../components/AdminHall/AdminHall';


function Hall() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <AdminHall/>
    </div>
  );
}

export default Hall;