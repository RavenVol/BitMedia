import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/statsNavigation.css';

const StatsNavigation = ({menu}) => (
  <ul className="statsNav">
    {menu.map((part, index, allParts) => (
      <li
        key={part.title}
        className="statsNav__item"
      >
        <Link
          to={part.address}
          className={index === allParts.length - 1
            ? "statsNav__link statsNav__link--last"
            : "statsNav__link"}
        >
          {part.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default StatsNavigation;

