import React from 'react'
import "./Sidebar.css"
import { Avatar } from "@material-ui/core";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recents">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1615196534055-7aa534f6836b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Aakash Suresh</h2>
                <h4>Developer</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNo'>2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Viewed on post</p>
                    <p className='sidebar__statNo'>2,449</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                <p>{recentItem("reactjs")}</p>
                <p>{recentItem("flutter")}</p>
                <p>{recentItem("developer")}</p>
                <p>{recentItem("sde")}</p>
                <p>{recentItem("designer")}</p>
            </div>
        </div>
    )
}

export default Sidebar  