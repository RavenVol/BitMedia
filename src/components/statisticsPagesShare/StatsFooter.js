import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/statsFooter.css';

const StatsFooter = () => (
  <div className="statsFooter">
    <div className="statsFooter__wrap">
      <Link to="/" className="statsFooter__logo">AppCo</Link>
      <div className="statsFooter__copyName">All rights reserved by ThemeTags</div>
      <div className="statsFooter__copyDate">Copyrights © 2019</div>
    </div>
  </div>
);

export default StatsFooter;

