import { Expose } from 'class-transformer';

export class LanguageRequest {
  @Expose()
  public all?: boolean;

  constructor(request: Partial<LanguageRequest>) {
    Object.assign(this, request);
  }
}
