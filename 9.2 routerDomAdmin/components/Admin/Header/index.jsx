import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Admin Logo</h1>

      <nav>
        <ul>
          <li>
            {/* <Link to={"/"}>Home</Link> */}
            <NavLink
              to={"/admin"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/team-members"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Team Members
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/products"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Products
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
