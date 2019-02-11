import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars" />
      </span> */}

      <NavLink to="/"> Home </NavLink>
      <NavLink to="/map"> Captain`s Map </NavLink>
      <NavLink to="/photo"> Slide Show </NavLink>
    </nav>
  );
};
