import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div style={{ width: '100px' }} className="sidebar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/apps" activeClassName="active">
        Apps
      </NavLink>
      <NavLink to="/games" activeClassName="active">
        Games
      </NavLink>
      <NavLink to="/library" activeClassName="active">
        Library
      </NavLink>
    </div>
  );
};

export default Sidebar;
