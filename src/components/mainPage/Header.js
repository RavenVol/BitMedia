import React from 'react';
import { Link } from 'react-router-dom';

import Phone from './Phone';
import '../../styles/css/mainHeader.css';

const Header = () => (
  <div className="header">
    <div className="header__logo">
      AppCo
    </div>
    <h2 className="header__title">
       for desired perfect Usability
    </h2>
    <p className="header__message">
      Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
    </p>
    <Link to="/stats">
      <button className="header__button" type="button">
        View Stats
      </button>
    </Link>
    <div className="header__phone">
      <Phone />
    </div>
  </div>
);

export default Header;


