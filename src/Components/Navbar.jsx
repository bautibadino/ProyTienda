import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import { CartWidget } from "./CartWidget";
import { Nav } from "react-bootstrap";
import { Context } from "../Context/Context";

export const Navbar = () => {
  const value = useContext(Context);
  const {cart}  = value;
  const [cartLength, setCartLength] = useState(0)

  useEffect(() => {
    setCartLength(cart.length)
  }, [cart.length])

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
      <NavLink to={'/carrito'} className="carrito nav-item nav-link link">
        <CartWidget />
        <span className="badge bg-secondary">{cartLength}</span>
      </NavLink>
    </nav>
  );
};
