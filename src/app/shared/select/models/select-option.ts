export class SelectOption {
  public id: number;
  public title: string;

  constructor(model: SelectOption) {
    this.id = model.id;
    this.title = model.title;
  }
}
