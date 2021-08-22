import { Expose } from 'class-transformer';

export class Language {
  @Expose()
  public id: number;

  @Expose()
  public code: string;

  constructor(language: Partial<Language>) {
    Object.assign(this, language);
  }
}
