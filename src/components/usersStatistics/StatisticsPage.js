import React from 'react';

import StatsHeader from '../statisticsPagesShare/StatsHeader';
import StatsNavigation from '../statisticsPagesShare/StatsNavigation';
import StatsFooter from '../statisticsPagesShare/StatsFooter';
import StatsMain from './StatsMain';

import '../../styles/css/statsPage.css';

const StatisticsPage = ({match, history}) => (
  <>
    <header className="statsPageHeader">
      <StatsHeader />
      <nav className="statsPageHeader__navigation">
        <StatsNavigation
          menu={[
            {title: "Main Page", address: "/"},
            {title: "Users Statistics", address: "/stats"},
          ]}
        />
      </nav>
    </header>

    <main className="statsPageMain">
      <StatsMain match={match} history={history}/>
    </main>

    <footer className="statsPageFooter">
      <StatsFooter />
    </footer>
  </>
);

export default StatisticsPage;

