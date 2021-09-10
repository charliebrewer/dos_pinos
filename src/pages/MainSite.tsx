import React, { useContext } from 'react';
import StoreContext from '../store/StoreContext';
import Store from '../store/Store';
import NavBar from '../components/NavBar';
import Welcome from './Welcome';
import Footer from '../components/Footer';
import { observer } from 'mobx-react-lite';

export default observer(() => {
  const store = useContext(StoreContext) as Store;

  return (
    <div className="App">
      <header>
        <h1>Dos Pinos Housing Cooperative</h1>
        <NavBar></NavBar>
      </header>
      <div>{store.page}</div>
      <div>
        <Welcome></Welcome>
      </div>
      <Footer></Footer>
      <button onClick={() => store.setPage('other')}>press</button>
    </div>
  );
});
