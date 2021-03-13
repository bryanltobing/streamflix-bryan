import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const HomePagesLoad = loadable(() => import('pages/HomePages'));
const TrendingPagesLoad = loadable(() => import('pages/TrendingPages'));

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePagesLoad} exact />
      <Route path="/trending" component={TrendingPagesLoad} exact />
    </Switch>
  );
};

export default Routes;
