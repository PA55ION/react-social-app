import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2>Social App</h2>
      </Link>
    </header>
  );
};

export default Header;
