import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './mainPage/MainPage';
import StatisticsPage from './usersStatistics/StatisticsPage';
import UserDetails from './userDetails/UserDetails';

import '../styles/css/reset.css';
import '../styles/css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/stats/page=:page?' exact component={StatisticsPage} />
          <Route path='/stats' exact component={StatisticsPage} />
          <Route path='/user:id?' exact component={UserDetails} />
          <Route path='*' component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
