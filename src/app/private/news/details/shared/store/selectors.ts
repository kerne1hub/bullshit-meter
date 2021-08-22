import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateNewsDetailsPageState } from './state';
import { Article } from '@shared/article';
import { Comment } from '@shared/comment';
import { FormGroupState } from 'ngrx-forms';
import { CommentForm } from '../forms';

const selectFeature = (state: AppState) => state.privateNewsDetailsPage as PrivateNewsDetailsPageState;

export class PrivateNewsDetailsPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.isLoading
  );

  public static item: MemoizedSelector<AppState, Article> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.item
  );

  public static isCommentsLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.isCommentsLoading
  );

  public static comments: MemoizedSelector<AppState, Array<Comment>> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.comments
  );

  public static commentForm: MemoizedSelector<AppState, FormGroupState<CommentForm>> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.commentForm
  );

  public static id: MemoizedSelector<AppState, number> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.id
  );

  public static totalComments: MemoizedSelector<AppState, number> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.totalComments
  );

  public static nextCommentsPage: MemoizedSelector<AppState, number> = createSelector(
    selectFeature,
    (state: PrivateNewsDetailsPageState) => state.nextCommentsPage
  );
}
