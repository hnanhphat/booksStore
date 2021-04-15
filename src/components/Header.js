import logo from '../logo.svg';
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="Books Store" width="50px" />
        </Link>
      </div>
      <div className="header__right"></div>
    </header>
  )
}

export default Header
