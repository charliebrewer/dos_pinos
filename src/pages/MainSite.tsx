import React, { useContext } from 'react';
import StoreContext from '../store/StoreContext';
import Store from '../store/Store';
import NavBar from '../components/NavBar';
import Welcome from './Welcome';
import History from './History';
import Footer from '../components/Footer';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import headerImg from '../assets/cropped-header-four-2016.jpg';
import { Switch, Route } from 'react-router-dom';
import Vision from './Vision';
import Location from './Location';

const App = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default observer(() => {
  const store = useContext(StoreContext) as Store;

  return (
    <App>
      <header>
        <h1>Dos Pinos Housing Cooperative</h1>

        <p>
          <i>More than just a place to live...</i>
        </p>

        <StyledImg src={headerImg} />
        <NavBar></NavBar>
      </header>

      <Switch>
        <Route path="/history">
          <History />
        </Route>

        <Route path="/vision">
          <Vision />
        </Route>

        <Route path="/location">
          <Location />
        </Route>

        <Route path="*">
          <Welcome />
        </Route>
      </Switch>

      <hr />

      <Footer></Footer>
    </App>
  );
});
// history vision location organizationalStructure memberContribution floorPlans financialInformation applicationProcess membersHandbook faq
