import { NewsItemFacade } from './news-item.facade';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
import { Article, ArticleRate } from '@shared/article';

@Component({
  selector: 'private-news-item',
  templateUrl: 'news-item.html',
  styleUrls: ['news-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateNewsItemComponent {
  @Input() article: Article;
  @Input() hasDetails: boolean;

  @Output() rating: EventEmitter<ArticleRate>;

  public get rateTypes() {
    return [ArticleRate.FAKE, ArticleRate.NOT_SURE, ArticleRate.TRUTH];
  }

  public get tagName$(): Observable<string | undefined> {
    return this.facade.getTagName$(this.article.categoryID);
  }

  public get rateStyle() {
    return {
      [ArticleRate.FAKE]: 'poo',
      [ArticleRate.NOT_SURE]: 'think',
      [ArticleRate.TRUTH]: 'like',
    };
  }

  constructor(private facade: NewsItemFacade) {
    this.hasDetails = false;
    this.rating = new EventEmitter<ArticleRate>();
  }

  public getRatesCount(rate: ArticleRate): number | null {
    switch (rate) {
      case ArticleRate.FAKE:
        return this.article.fakeRates;
      case ArticleRate.NOT_SURE:
        return this.article.notSureRates;
      case ArticleRate.TRUTH:
        return this.article.truthRates;
      default:
        return null;
    }
  }

  public rate(rateType: ArticleRate) {
    this.rating.emit(rateType);
  }
}
