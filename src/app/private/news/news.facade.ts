import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateNewsPageActions, PrivateNewsPageSelectors } from './shared/store';
import { AppState } from '@shared/store';
import { Article, ArticleRate } from '@shared/article';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class PrivateNewsPageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateNewsPageSelectors.isLoading);
  }

  public get articles$(): Observable<Array<Article>> {
    return this.store.select(PrivateNewsPageSelectors.items);
  }

  public get filters$(): Observable<void> {
    return this.route.queryParamMap.pipe(
      map((params) => {
        const onlyNew = params.get('onlyNew') === 'true' || undefined;
        const onlyTrusted = params.get('onlyTrusted') === 'true' || undefined;
        const onlyFakes = params.get('onlyFakes') === 'true' || undefined;

        this.store.dispatch(PrivateNewsPageActions.changeFilters({ filters: { onlyNew, onlyTrusted, onlyFakes } }));
        this.store.dispatch(PrivateNewsPageActions.loadItems());
      })
    );
  }

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
  }

  public init(): void {
    this.store.dispatch(PrivateNewsPageActions.initPage());
  }

  public loadNextPage(): void {
    this.store.dispatch(PrivateNewsPageActions.loadNextPage());
  }

  public rateItem(id: number, rate: ArticleRate): void {
    this.store.dispatch(PrivateNewsPageActions.rateItem({ id, rate }));
  }
}
