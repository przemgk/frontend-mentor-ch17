import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Roundel from 'components/Roundel';

const Root = () => (
  <BrowserRouter>
    <Header />
    <Roundel />
    <Footer />
  </BrowserRouter>
);

export default Root;
