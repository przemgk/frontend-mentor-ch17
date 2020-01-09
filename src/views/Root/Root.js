import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Roundel from 'components/Roundel';

const Root = () => (
  <BrowserRouter>
    <Header />
    <Roundel roundelType="Scissors" />
    <Roundel roundelType="Rock" />
    <Roundel roundelType="Spock" />
    <Roundel roundelType="Paper" />
    <Roundel roundelType="Lizard" />
    <Footer />
  </BrowserRouter>
);

export default Root;
