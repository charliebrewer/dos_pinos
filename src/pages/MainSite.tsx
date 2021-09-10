import React, { useContext } from 'react';
import StoreContext from '../store/StoreContext';
import Store from '../store/Store';
import NavBar from '../components/NavBar';
import Welcome from './Welcome';
import Footer from '../components/Footer';
import { observer } from 'mobx-react-lite';
import styled, { createGlobalStyle } from 'styled-components';
import headerImg from '../assets/cropped-header-four-2016.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f1f1;
  }
`;

const App = styled.div`
  max-width: 900px;
  margin: auto;
  background-color: #ffffff;
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default observer(() => {
  const store = useContext(StoreContext) as Store;

  return (
    <App>
      <GlobalStyle />
      <header>
        <h1>Dos Pinos Housing Cooperative</h1>
        <StyledImg src={headerImg} />
        <NavBar></NavBar>
      </header>
      <div>{store.page}</div>
      <div>
        <Welcome></Welcome>
      </div>
      <Footer></Footer>
      <button onClick={() => store.setPage('other')}>press</button>
    </App>
  );
});
