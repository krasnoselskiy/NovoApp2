import React from 'react';
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="sidebarMenu">
      <Menu>
        <Link to='/about'>About</Link>
      </Menu>
    </div>
  )
}

export default SidebarMenu;
