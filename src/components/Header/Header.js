import React from "react";
import "./Header.css";
import img from "./user.jpg";

const Header = () => {
  return (
    <div className="Header">
      <h1>Users Api</h1>
      <img src={img} alt="Breaking Bad Logo" width="150px" />
    </div>
  );
};

export default Header;
