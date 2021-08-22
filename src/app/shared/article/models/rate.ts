import { ArticleRate } from '@shared/article/enums/article-rate';
import { Expose } from 'class-transformer';

export class Rate {
  public id: number;

  @Expose({ name: 'user_id' })
  public userID: number;

  @Expose({ name: 'article_id' })
  public articleID: number;

  public rate: ArticleRate;
}
