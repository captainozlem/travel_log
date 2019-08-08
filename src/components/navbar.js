import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars" />
      </span> */}

      <NavLink className="links" to="/">
        {' '}
        Home{' '}
      </NavLink>
      <NavLink className="links" to="/map">
        {' '}
        Captain`s Map{' '}
      </NavLink>
      <NavLink className="links" to="/pop">
        {' '}
        Slide Show{' '}
      </NavLink>
    </nav>
  );
};
