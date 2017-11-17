import React from 'react';
import Relay from 'react-relay/classic';
import { Router, Route, Redirect, browserHistory, applyRouterMiddleware } from 'react-router';
import userRelay from 'react-router-relay';
import Home from './components/Home';
import Search from './components/Search';
import Make from './components/Make';
import Model from './components/Model';

const HomeQueries = {
  viewer: () => Relay.QL`query { viewer }`
};
const SearchQueries = {
  viewer: () => Relay.QL`query { viewer }`
};
const ModelQueries = {
  viewer: () => Relay.QL`query { viewer }`
};


export default () => (
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(userRelay)}
    environment={Relay.Store}
  >
    <Route path="search" component={Search} queries={SearchQueries}/>
    <Route path="make" component={Make}>
      <Route path="model/:id" component={Model} queries={ModelQueries}/>
    </Route>
    <Route path="/" component={Home} queries={HomeQueries}/>
  </Router>
);
