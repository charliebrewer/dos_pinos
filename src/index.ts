import App from './App';
import Store from './store/Store';

(() => {
  const store = new Store();
  App(store);
})();
