import { useState } from 'react';
import Login from '../components/AdminLogin/Login';

function AdminLog() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <Login/>
    </div>
  );
}

export default AdminLog;