import React from 'react';
import icon from '../src/Assets/black logo.png';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={icon} alt="" className='logo-image' />
        </div>
        <span className='icon close-icon'>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard">
            <DashboardOutlinedIcon />Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/reports">
            <ReportGmailerrorredOutlinedIcon />Report
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <SettingsOutlinedIcon />Settings
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/logout">
            <LogoutOutlinedIcon />Logout
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar;
