import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/paginator.css';

const Paginator = (props) => {
  const { currPage, pagesQtty } = props;
  console.log();

  return (
    <div className="paginator">
      {currPage > 1
        ? <Link
            to={`/stats/page=${currPage - 1}`}
            className="paginator__Btn"
          >
            {'<'}
          </Link>
        : <div className="paginator__noBtn">
            {'<'}
          </div>
      }

      {currPage > 1 && <Link to={`/stats/page=1`} className="paginator__Btn">1</Link>}

      {currPage >= 4 && <div>&nbsp;...&nbsp;</div>}

      {currPage === pagesQtty - 1 && <Link to={`/stats/page=${currPage - 2}`} className="paginator__Btn">{currPage - 2}</Link>}

      {currPage === pagesQtty && <>
        <Link to={`/stats/page=${currPage - 3}`} className="paginator__Btn">{currPage - 3}</Link>
        <Link to={`/stats/page=${currPage - 2}`} className="paginator__Btn">{currPage - 2}</Link>
      </>}

      {currPage >= 3 && <Link to={`/stats/page=${currPage - 1}`} className="paginator__Btn">{currPage - 1}</Link>}

      <Link to={`/stats/page=${currPage}`} className="paginator__Btn paginator__Btn--current">{currPage}</Link>

      {currPage < pagesQtty && <Link to={`/stats/page=${currPage + 1}`} className="paginator__Btn">{currPage + 1}</Link>}

      {currPage === 1 && <>
        <Link to={`/stats/page=${currPage + 2}`} className="paginator__Btn">{currPage + 2}</Link>
        <Link to={`/stats/page=${currPage + 3}`} className="paginator__Btn">{currPage + 3}</Link>
      </>}

      {currPage === 2 && <Link to={`/stats/page=${currPage + 2}`} className="paginator__Btn">{currPage + 2}</Link>}

      {currPage < (pagesQtty - 2) && <div>&nbsp;...&nbsp;</div>}

      {currPage < (pagesQtty - 1)  && <Link to={`/stats/page=${pagesQtty}`} className="paginator__Btn">{pagesQtty}</Link>}

      {currPage > (pagesQtty - 1)
        ? <div className="paginator__noBtn">
            {`>`}
          </div>
        : <Link
            to={`/stats/page=${currPage + 1}`}
            className="paginator__Btn"
          >
            {`>`}
          </Link>
      }
    </div>
  );
};

export default Paginator;
