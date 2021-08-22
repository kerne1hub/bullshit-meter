import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateNewsDetailsPageActions, PrivateNewsDetailsPageSelectors } from './shared/store';
import { AppState } from '@shared/store';
import { Article, ArticleRate } from '@shared/article';
import { FormGroupState } from 'ngrx-forms';
import { CommentForm } from './shared/forms';
import { Comment, CommentRate } from '@shared/comment';
import { ProfileService } from '@shared/profile';
import { map } from 'rxjs/operators';

@Injectable()
export class PrivateNewsDetailsPageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateNewsDetailsPageSelectors.isLoading);
  }

  public get avatarUrl$(): Observable<string> {
    return this.profileService.profile$.pipe(
      map((user) => user.avatarUrl)
    );
  }

  public get article$(): Observable<Article> {
    return this.store.select(PrivateNewsDetailsPageSelectors.item);
  }

  public get comments$(): Observable<Array<Comment>> {
    return this.store.select(PrivateNewsDetailsPageSelectors.comments);
  }

  public get commentForm$(): Observable<FormGroupState<CommentForm>> {
    return this.store.select(PrivateNewsDetailsPageSelectors.commentForm);
  }

  public get totalComments$(): Observable<number> {
    return this.store.select(PrivateNewsDetailsPageSelectors.totalComments);
  }

  constructor(
    private store: Store<AppState>,
    private profileService: ProfileService
  ) {
  }

  public init(id: number): void {
    this.store.dispatch(PrivateNewsDetailsPageActions.initPage({ id }));
  }

  public rateItem(rate: ArticleRate): void {
    this.store.dispatch(PrivateNewsDetailsPageActions.rateItem({ rate }));
  }

  public createComment(): void {
    this.store.dispatch(PrivateNewsDetailsPageActions.createComment());
  }

  public rateComment(id: number, rating: CommentRate): void {
    this.store.dispatch(PrivateNewsDetailsPageActions.rateComment({ id, rating }));
  }

  public resetState(): void {
    this.store.dispatch(PrivateNewsDetailsPageActions.resetState());
  }

  public loadNextCommentPage(): void {
    this.store.dispatch(PrivateNewsDetailsPageActions.loadNextCommentPage());
  }
}
