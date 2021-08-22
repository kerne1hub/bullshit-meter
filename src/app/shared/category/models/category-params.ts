export class CategoryParams {
  public all?: boolean;

  constructor(params: Partial<CategoryParams>) {
    Object.assign(this, params);
  }
}
