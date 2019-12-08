import React from 'react';

import '../../styles/css/mainPhone.css';

const Phone = () => (
  <div className="phone">
    <div className="phone__inner">
      <div className="phone__speacker" />
      <div className="phone__camera" />
      <div className="phone__screen" />
    </div>
    <div className="phone__button phone__button--1" />
    <div className="phone__button phone__button--2" />
    <div className="phone__button phone__button--3" />
    <div className="phone__button phone__button--4" />
  </div>
);

export default Phone;

