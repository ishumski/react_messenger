import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import MessageIcon from '@material-ui/icons/Message';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarOption Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={TimelineIcon} text="Timeline" />
            <SidebarOption Icon={MessageIcon} text="Message" />
            <SidebarOption Icon={PhotoCameraIcon} text="Gallery" />

        </div>
    )
}

export default Sidebar;
