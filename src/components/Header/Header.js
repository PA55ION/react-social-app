import React from 'react';
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom'
import './Header.css'
import { Nav, Button, Logo } from './HeaderStyle'

const Header = ({ theme, toggleTheme, history }) => {
    return (
      <Nav>
      <Link to="/">
        <Logo className='brand'>[Thefacebook]</Logo>
      </Link>
        <div className='dark-mode-btn'>
        <Button
          onClick={toggleTheme}
          className="flex items-center text-sm px-4 py-2 lg:mt-0 border none"
        >
          {theme === "light" ? (
            <i className="ri-moon-line"></i>
          ) : (
            <i className="ri-moon-fill"></i>
          )}
        </Button>
      </div>
      </Nav>
    )
}

Header.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
};
  
export default Header;
