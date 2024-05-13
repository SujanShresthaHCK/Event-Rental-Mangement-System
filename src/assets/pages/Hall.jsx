import { useState } from 'react';
import AdminHall from '../components/AdminHall/AdminHall';


function Hall() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <AdminHall/>
    </div>
  );
}

export default Hall;