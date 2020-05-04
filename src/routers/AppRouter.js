import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';

import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PortofolioPage from '../components/PortofolioPage';
import PortofolioItemPage from '../components/PortofolioItemPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/portofolio' component={PortofolioPage} exact={true} />
        <Route path='/portofolio/:id' component={PortofolioItemPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
