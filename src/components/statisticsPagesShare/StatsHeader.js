import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/statsHeader.css';

const StatsHeader = () => (
  <div className="statsHeader">
    <Link to="/" className="statsHeader__logo">AppCo</Link>
  </div>
);

export default StatsHeader;
