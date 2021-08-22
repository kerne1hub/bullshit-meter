import { box, Boxed } from 'ngrx-forms';

export class SelectTopicsForm {
  public categories: Boxed<Array<number>>;

  constructor() {
    this.categories = box([]);
  }
}
