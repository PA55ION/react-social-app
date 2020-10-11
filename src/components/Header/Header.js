import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2 className='brand'>Social App</h2>
      </Link>
    </header>
  );
};

export default Header;
