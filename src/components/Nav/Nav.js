import "./Nav.css";
// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "red",
  backgroundColor: "white",
  padding: "10px",
};

const Nav = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <NavLink
          to="/"
          className="NavLink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="NavLink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="NavLink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
