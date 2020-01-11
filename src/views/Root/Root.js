import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Modal from 'components/Modal';
import Start from 'views/Start';
import Round from 'views/Round';
import { Provider } from 'react-redux';
import store from 'store';

const Root = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/round" component={Round} />
        </Switch>
        <Modal isVisible={isModalVisible} closeModalFn={() => setModalVisibility(false)} />
        <Footer openModalFn={() => setModalVisibility(true)} />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
