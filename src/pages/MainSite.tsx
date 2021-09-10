import React from 'react';
import NavBar from '../components/NavBar';
import Welcome from './Welcome';
import Footer from '../components/Footer';

export default () => {
  return (
    <div className="App">
      <header>
        <h1>Dos Pinos Housing Cooperative</h1>
        <NavBar></NavBar>
      </header>
      <div>
        <Welcome></Welcome>
      </div>
      <Footer></Footer>
    </div>
  );
};
