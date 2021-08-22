import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { PrivateNewsPageFacade } from './news.facade';
import { Observable, Subscription } from 'rxjs';
import { Article, ArticleRate } from '@shared/article';

@Component({
  selector: 'private-news-page',
  templateUrl: 'news.html',
  styleUrls: ['news.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateNewsPageComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;
  public articles$: Observable<Array<Article>>;
  public filterSubscription: Subscription;

  constructor(
    private facade: PrivateNewsPageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
    this.articles$ = this.facade.articles$;
  }

  public ngOnInit(): void {
    this.facade.init();
    this.filterSubscription = this.facade.filters$.subscribe();
  }

  public ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }

  public onScrollDown(): void {
    this.facade.loadNextPage();
  }

  public rateItem(id: number, rate: ArticleRate): void {
    this.facade.rateItem(id, rate);
  }
}
