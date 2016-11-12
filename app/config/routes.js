import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';


import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import ForecastDetailContainer from '../containers/ForecastDetailContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='forecast/:city/detail' component={ForecastDetailContainer} />
    </Route>
  </Router>
);

export default routes;
