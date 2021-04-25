import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Bio from '../views/Bio';
import Contact from '../views/Contact';
import Home from '../views/Home';
import MyMusic from '../views/MyMusic';
import NotFound from '../views/NotFound';
import Produced from '../views/Produced';
import Research from '../views/Research';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Home}
      />
      <Route
        exact
        path='/bio'
        component={Bio}
      />
      <Route
        exact
        path='/production-engineering'
        component={Produced}
      />
      <Route
        exact
        path='/my-music'
        component={MyMusic}
      />
      <Route
        exact
        path='/contact'
        component={Contact}
      />
      <Route
        exact
        path='/research'
        component={Research}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
