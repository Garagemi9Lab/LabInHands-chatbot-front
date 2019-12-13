import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
