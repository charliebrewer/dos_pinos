import React from 'react';
import ReactDOM from 'react-dom';
import Store from '../store/Store';
import StoreContext from '../store/StoreContext';
import MainSite from './MainSite';

export default () => {
  ReactDOM.render(
    <StoreContext.Provider value={new Store()}>
      <MainSite />
    </StoreContext.Provider>,
    document.getElementById('root')
  );
};
