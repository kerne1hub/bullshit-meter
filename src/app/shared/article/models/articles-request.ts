import { Expose } from 'class-transformer';
import { ArticleRate, ArticleRelation } from '@shared/article';

export class ArticlesRequest {
  @Expose()
  public page?: number;

  @Expose({ name: 'only_new', toPlainOnly: true })
  public onlyNew?: boolean;

  @Expose({ name: 'only_trusted', toPlainOnly: true })
  public onlyTrusted?: boolean;

  @Expose({ name: 'only_fakes', toPlainOnly: true })
  public onlyFakes?: boolean;

  @Expose({ name: 'with_count', toPlainOnly: true })
  public relations?: Array<ArticleRelation>;

  public rate?: ArticleRate;

  @Expose({ name: 'language_id', toPlainOnly: true })
  public languageID: Array<number | null>;

  @Expose({ name: 'category_id', toPlainOnly: true })
  public categoryID: Array<number>;

  constructor(request: Partial<ArticlesRequest>) {
    Object.assign(this, request);
  }
}
