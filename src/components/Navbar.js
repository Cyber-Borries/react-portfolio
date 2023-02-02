import React, { useState, useEffect, useContext } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
// import "./Navbar.css";
// import { MainState } from "./AppLayout";

const Navbar = (props) => {
  return (
    <>
      <div>
        <div className="main-container" />
        <nav className="navbar">
          <div className="nav-container">
            <NavLink to="/" className="nav-logo">
              <div className="logo"></div>
            </NavLink>

            <ul className="nav-menu active">
              <li className="nav-item">
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-links">
                  About me
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/projects" className="nav-links">
                  Projects
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Contact" className="nav-links">
                  Contact me
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Blog" className="nav-links">
                  Blog
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon"></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
