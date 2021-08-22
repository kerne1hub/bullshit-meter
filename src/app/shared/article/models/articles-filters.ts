import { ArticleRate } from '@shared/article/enums/article-rate';

export class ArticlesFilters {
  public query?: string;
  public page?: number;
  public languageID?: Array<number | null>;
  public categoryID?: Array<number>;
  public rate?: ArticleRate;
  public onlyNew?: boolean;
  public onlyTrusted?: boolean;
  public onlyFakes?: boolean;

  constructor(filter: Partial<ArticlesFilters>) {
    Object.assign(this, filter);
  }
}
