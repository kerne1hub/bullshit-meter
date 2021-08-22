export class LanguageParams {
  public all?: boolean;

  constructor(params: Partial<LanguageParams>) {
    Object.assign(this, params);
  }
}
