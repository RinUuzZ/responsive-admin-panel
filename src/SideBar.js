import React, { useState } from 'react'
import './SideBar.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import logo from '../src/Assets/black logo.png'


const SideBar = () => {

        const [navCollapse, setNavCollapse] = useState(false)

    return (
        <div className="container">
            <nav className="nav">
                <div className='main-img'>
                <img src={logo} alt=""  className='main-logo-image'/>
                <MenuOutlinedIcon style={{'margin-top': '30px','cursor' : 'pointer'}} onClick={e => setNavCollapse(!navCollapse)}/>
                </div>  
                <ul>
                    <li>Home</li>
                    <li>New</li>
                </ul>
            </nav>
            <div className='sidebar-content'>
                <div className={`sideBar-container ${navCollapse ? "navCollapse" : ""}`}>
                    <div className="nav-option option1">
                        <DashboardIcon />
                        <h3>Dashboard</h3>
                    </div>

                    <div className="nav-option option1">
                        <ArticleOutlinedIcon />
                        <h3>Articles</h3>
                    </div>

                    <div className="nav-option option1">
                        <ReportGmailerrorredOutlinedIcon />
                        <h3>Reports</h3>
                    </div>

                    <div className="nav-option option1">
                        <AccountBoxOutlinedIcon />
                        <h3>Profile</h3>
                    </div>

                    <div className="nav-option option1">
                        <SettingsOutlinedIcon />   
                        <h3>Settings</h3>
                    </div>

                    <div className="nav-option option1">
                        <LogoutOutlinedIcon />
                        <h3>LogOut</h3>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default SideBar
