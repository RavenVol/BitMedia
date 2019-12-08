import React from 'react';
import SubscribeBar from './SubscribeBar';

import '../../styles/css/mainFooter.css';

const Footer = () => (
  <div className="footer">
    <div className="footer__wrap">
      <div className="footer__logo">AppCo</div>
      <div className="footer__copyName">All rights reserved by ThemeTags</div>
      <div className="footer__copyDate">Copyrights © 2019</div>
    </div>
    <div className="footer__subscribe">
      <SubscribeBar />
    </div>
  </div>
);

export default Footer;
