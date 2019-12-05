import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './mainPage/MainPage';

import '../styles/css/reset.css';
import '../styles/css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='*' component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
