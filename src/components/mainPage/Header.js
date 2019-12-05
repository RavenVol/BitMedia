import React from 'react';

import Phone from './Phone';
import '../../styles/css/header.css';

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
    <button className="header__button" type="button">
      View Stats
    </button>
    <div className="header__phone">
      <Phone />
    </div>
  </div>
);

export default Header;


