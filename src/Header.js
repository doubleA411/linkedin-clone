import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>

            </div>
            <div className="header__right">
                <HeaderOption title={"Home"} Icon={HomeIcon} />
                <HeaderOption title={"My Network"} Icon={SupervisorAccountIcon} />
                <HeaderOption title={"Jobs"} Icon={BusinessCenterIcon} />
                <HeaderOption title={"Messaging"} Icon={ChatIcon} />
                <HeaderOption title={"Notifications"} Icon={NotificationsIcon} />
                <HeaderOption avatar="https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.jpg" title={"Aakash"} />

            </div>
        </div>
    )
}

export default Header