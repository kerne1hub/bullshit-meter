import { Expose } from 'class-transformer';

export class Category {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  constructor(category: Partial<Category>) {
    Object.assign(this, category);
  }
}
