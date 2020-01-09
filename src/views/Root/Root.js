import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
// import Modal from 'components/Modal';
import Start from 'views/Start';

const Root = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Start} />
    </Switch>
    {/* <Modal /> */}
    <Footer />
  </BrowserRouter>
);

export default Root;
