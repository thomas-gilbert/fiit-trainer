import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home/index.js';
import NotFound from './containers/notfound/index.js';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
  </Switch>;