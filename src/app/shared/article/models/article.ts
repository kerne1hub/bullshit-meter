import { ArticleRate } from '@shared/article/enums/article-rate';
import { Expose, Type } from 'class-transformer';
import { DateTime } from 'luxon';
import { TransformDate } from '@shared/class-transformer';

export class Article {
  @Expose()
  public id: number;

  @Expose()
  public author: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose({ name: 'image_url' })
  public imageUrl: string;

  @Expose()
  public content: string;

  @Type(() => DateTime)
  @TransformDate()
  @Expose({ name: 'published_at' })
  public publishedAt: DateTime;

  @Type(() => DateTime)
  @TransformDate()
  @Expose({ name: 'created_at' })
  public createdAt: DateTime;

  @Type(() => DateTime)
  @TransformDate()
  @Expose({ name: 'updated_at' })
  public updatedAt: DateTime;

  @Expose()
  public url: string;

  @Expose({ name: 'language_id' })
  public languageID: number;

  @Expose({ name: 'category_id' })
  public categoryID: number;

  @Expose({ name: 'provided_rank' })
  public providedRank: ArticleRate | null;

  @Expose({ name: 'is_viewed' })
  public isViewed: boolean;

  @Expose({ name: 'published_at_timestamp' })
  public publishedAtTimestamp: number;

  @Expose({ name: 'truth_rates_count' })
  public truthRates: number;

  @Expose({ name: 'not_sure_rates_count' })
  public notSureRates: number;

  @Expose({ name: 'fake_rates_count' })
  public fakeRates: number;

  constructor(article: Partial<Article>) {
    Object.assign(this, article);
  }
}
