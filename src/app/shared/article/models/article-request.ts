import { Expose } from 'class-transformer';
import { ArticleRelation } from '@shared/article';

export class ArticleRequest {
  @Expose({ name: 'with_count', toPlainOnly: true })
  public relations?: Array<ArticleRelation>;

  constructor(request: Partial<ArticleRequest>) {
    Object.assign(this, request);
  }
}
