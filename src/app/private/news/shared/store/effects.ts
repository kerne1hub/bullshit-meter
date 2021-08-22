import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ArticleService, ArticlesFilters } from '@shared/article';
import { ProfileService } from '@shared/profile';
import { PrivateNewsPageActions } from './actions';
import { PrivateNewsPageSelectors } from './selectors';

@Injectable()
export class PrivateNewsPageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsPageActions.initPage),
      map(() => {
        const filters = new ArticlesFilters({
          languageID: [this.profileService.selectedLanguageID],
          categoryID: this.profileService.preferredTopics
        });

        return PrivateNewsPageActions.changeFilters({ filters });
      })
    )
  );

  public loadItems$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsPageActions.loadItems),
      withLatestFrom(this.store.select(PrivateNewsPageSelectors.filters)),
      switchMap(([_, filters]) => this.articleService.search(filters, { relations: ['truthRates', 'notSureRates', 'fakeRates'] })
        .pipe(
          map((response) => PrivateNewsPageActions.loadItemsSuccess({ response })),
          catchError((response) => of(PrivateNewsPageActions.loadItemsFailure({ response })))
        )
      )
    )
  );

  public loadNextPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsPageActions.loadNextPage),
      withLatestFrom(
        this.store.select(PrivateNewsPageSelectors.isLoading)
      ),
      filter(([_, isLoading]) => !isLoading),
      map(() => PrivateNewsPageActions.loadItems())
    )
  );

  public rateItem$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsPageActions.rateItem),
      exhaustMap((action) => this.articleService.rate(action.id, action.rate)
        .pipe(
          map(() => PrivateNewsPageActions.rateItemSuccess({ id: action.id })),
          catchError((response) => of(PrivateNewsPageActions.rateItemFailure({ response })))
        )
      )
    )
  );

  public rateItemSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsPageActions.rateItemSuccess),
      map((action) => PrivateNewsPageActions.loadItem({ id: action.id }))
    )
  );

  public loadItem$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsPageActions.loadItem),
      switchMap((action) => this.articleService.get(action.id, { relations: ['truthRates', 'notSureRates', 'fakeRates'] })
        .pipe(
          map((response) => PrivateNewsPageActions.loadItemSuccess({ response })),
          catchError((response) => of(PrivateNewsPageActions.loadItemFailure({ response })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private profileService: ProfileService,
    private store: Store<AppState>
  ) { }
}
