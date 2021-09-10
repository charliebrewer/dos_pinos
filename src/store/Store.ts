import { action, makeObservable, observable } from 'mobx';

export default class Store {
  page = 'main';

  constructor() {
    makeObservable(this, {
      page: observable,
      setPage: action,
    });
  }

  setPage(page: string) {
    this.page = page;
  }
}
