import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { ArticleService } from '@shared/article';
import { PrivateNewsDetailsPageActions } from './actions';
import { PrivateNewsDetailsPageSelectors } from './selectors';
import { CommentService } from '@shared/comment';

@Injectable()
export class PrivateNewsDetailsPageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.initPage),
      mergeMap((action) => [
        PrivateNewsDetailsPageActions.loadItem(action),
        PrivateNewsDetailsPageActions.loadComments(action)
      ])
    )
  );

  public loadItem$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.loadItem),
      switchMap((action) => this.articleService.get(action.id, { relations: ['truthRates', 'notSureRates', 'fakeRates'] })
        .pipe(
          map((response) => PrivateNewsDetailsPageActions.loadItemSuccess({ response })),
          catchError((response) => of(PrivateNewsDetailsPageActions.loadItemFailure({ response })))
        )
      )
    )
  );

  public loadComments$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.loadComments),
      withLatestFrom(this.store.select(PrivateNewsDetailsPageSelectors.nextCommentsPage)),
      switchMap(([action, page]) => this.commentService.search(action.id, { page, relations: ['likes', 'dislikes', 'user'] })
        .pipe(
          map((response) => PrivateNewsDetailsPageActions.loadCommentsSuccess({ response })),
          catchError((response) => of(PrivateNewsDetailsPageActions.loadCommentsFailure({ response })))
        )
      )
    )
  );

  public rateItem$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.rateItem),
      withLatestFrom(this.store.select(PrivateNewsDetailsPageSelectors.id)),
      exhaustMap(([action, id]) => this.articleService.rate(id, action.rate)
        .pipe(
          map(() => PrivateNewsDetailsPageActions.rateItemSuccess({ id })),
          catchError((response) => of(PrivateNewsDetailsPageActions.rateItemFailure({ response })))
        )
      )
    )
  );

  public rateItemSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.rateItemSuccess),
      map((action) => PrivateNewsDetailsPageActions.loadItem({ id: action.id }))
    )
  );

  public createComment$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.createComment),
      withLatestFrom(
        this.store.select(PrivateNewsDetailsPageSelectors.id),
        this.store.select(PrivateNewsDetailsPageSelectors.commentForm)
      ),
      exhaustMap(([_, id, form]) => this.commentService.create(id, form.value.content)
        .pipe(
          map((response) => PrivateNewsDetailsPageActions.createCommentSuccess({ response })),
          catchError((response) => of(PrivateNewsDetailsPageActions.createCommentFailure({ response })))
        )
      )
    )
  );

  public loadNextCommentPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.loadNextCommentPage),
      withLatestFrom(
        this.store.select(PrivateNewsDetailsPageSelectors.isCommentsLoading),
        this.store.select(PrivateNewsDetailsPageSelectors.id)
      ),
      filter(([_, isLoading]) => !isLoading),
      map(([_, , id]) => PrivateNewsDetailsPageActions.loadComments({ id }))
    )
  );

  public rateComment$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateNewsDetailsPageActions.rateComment),
      exhaustMap((action) => this.commentService.rate(action.id, action.rating)
        .pipe(
          map((response) => PrivateNewsDetailsPageActions.rateCommentSuccess({ response })),
          catchError((response) => of(PrivateNewsDetailsPageActions.rateCommentFailure({ response })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {
  }
}
