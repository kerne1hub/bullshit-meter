export class TagOption {
  public id: number;
  public text: string;

  constructor({ id, text }: { id: number; text: string }) {
    this.id = id;
    this.text = text;
  }
}
