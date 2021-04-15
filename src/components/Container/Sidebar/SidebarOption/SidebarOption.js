import React from 'react';
import { NavLink } from 'react-router-dom';
import "./SidebarOption.css";


function SidebarOption({ text, Icon, to }) {
    return (
        <NavLink to={to} className="sidebarOption">
            <Icon />
            <h3>{text}</h3>
        </NavLink>
    )
}
export default SidebarOption;