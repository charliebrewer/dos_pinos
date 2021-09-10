import { makeAutoObservable } from 'mobx';

export default class Store {
  page = 'main';

  constructor() {
    makeAutoObservable(this);
  }
}
