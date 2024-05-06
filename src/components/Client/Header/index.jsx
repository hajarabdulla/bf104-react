import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>

      <nav>
        <ul>
          <li>
            {/* <Link to={"/"}>Home</Link> */}
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Admin
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
