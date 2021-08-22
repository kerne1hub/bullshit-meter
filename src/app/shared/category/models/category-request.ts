import { Expose } from 'class-transformer';

export class CategoryRequest {
  @Expose()
  public all?: boolean;

  constructor(request: Partial<CategoryRequest>) {
    Object.assign(this, request);
  }
}
