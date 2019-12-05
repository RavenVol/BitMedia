import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
