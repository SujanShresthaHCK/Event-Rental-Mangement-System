import React from 'react'
import './AdminHeader.css';
import {BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function AdminHeader({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default AdminHeader