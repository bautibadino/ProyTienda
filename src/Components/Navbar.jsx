import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import { CartWidget } from "./CartWidget";
import { Nav } from "react-bootstrap";

export const Navbar = () => {

  return (
    <nav className="animate__animated animate__bounce navbar navbar-expand-sm navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <NavLink 
          to={'/'}
          className= {'navbar-brand link'}
          >
            Tienda</NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="/iphone"
          >
            Iphone
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link link ${isActive ? "active" : ""}`
            }
            to="/macbook"
          >
            Macbook
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link link ${isActive ? "active" : ""}`
            }
            to="/ipad"
          >
            Ipad
          </NavLink>
        </div>
      </div>
      <NavLink to={'/carrito'} className="nav-item nav-link link">
        <CartWidget />
      </NavLink>
    </nav>
  );
};
