import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {

  return (
    <nav className="animate__animated animate__bounce navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <NavLink 
          to={'/'}
          className= {'brand h2 text-decoration-none text-white'}
          >
            Tienda</NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link link ${isActive ? "active" : ""}`
            }
            to="/category/iphone"
          >
            Iphone
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link link ${isActive ? "active" : ""}`
            }
            to="/category/macbook"
          >
            Macbook
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link link ${isActive ? "active" : ""}`
            }
            to="/category/ipad"
          >
            Ipad
          </NavLink>
        </div>
      </div>
        <CartWidget />
    </nav>
  );
};
