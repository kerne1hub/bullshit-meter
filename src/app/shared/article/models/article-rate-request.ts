import { ArticleRate } from '@shared/article/enums/article-rate';

export class ArticleRateRequest {
  public rate: ArticleRate;

  constructor(request: Partial<ArticleRateRequest>) {
    Object.assign(this, request);
  }
}
