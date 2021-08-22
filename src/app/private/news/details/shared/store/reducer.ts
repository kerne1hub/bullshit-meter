import { Action, createReducer, on } from '@ngrx/store';
import { onNgrxForms } from 'ngrx-forms';
import { PrivateNewsDetailsPageActions } from './actions';
import { PrivateNewsDetailsPageState } from './state';
import { Comment } from '@shared/comment';

const initialState = new PrivateNewsDetailsPageState();

const reducer = createReducer(
  initialState,
  onNgrxForms(),
  on(PrivateNewsDetailsPageActions.resetState, () => initialState),
  on(PrivateNewsDetailsPageActions.loadItem, (state) => ({
    ...state,
    isLoading: true
  })),
  on(PrivateNewsDetailsPageActions.loadItemSuccess, (state, action) => ({
    ...state,
    item: action.response,
    id: action.response.id,
    isLoading: false
  })),
  on(PrivateNewsDetailsPageActions.loadItemFailure, (state) => ({
    ...state,
    isLoading: false
  })),
  on(PrivateNewsDetailsPageActions.loadComments, (state) => ({
    ...state,
    isCommentsLoading: true
  })),
  on(PrivateNewsDetailsPageActions.loadCommentsSuccess, (state, action) => ({
    ...state,
    isCommentsLoading: false,
    comments: state.comments.concat(action.response.data),
    totalComments: action.response.total,
    nextCommentsPage: action.response.currentPage + 1
  })),
  on(PrivateNewsDetailsPageActions.loadCommentsFailure, (state) => ({
    ...state,
    isCommentsLoading: false
  })),
  on(PrivateNewsDetailsPageActions.createCommentSuccess, (state, action) => ({
    ...state,
    comments: state.comments.concat(new Comment({
      ...action.response,
      likesCount: 0,
      dislikesCount: 0
    })),
    commentForm: initialState.commentForm
  })),
  on(PrivateNewsDetailsPageActions.rateCommentSuccess, (state, action) => ({
    ...state,
    comments: state.comments
      .map((comment) => (comment.id === action.response.id)
        ? new Comment({
          ...comment,
          likesCount: action.response.likesCount,
          dislikesCount: action.response.dislikesCount,
          isUserLiked: action.response.isUserLiked,
          isUserDisliked: action.response.isUserDisliked,
          likes: [],
          dislikes: []
        })
        : comment
      )
  }))
);

export const privateNewsDetailsPageReducer = (
  state: PrivateNewsDetailsPageState | undefined,
  action: Action
): PrivateNewsDetailsPageState => reducer(state, action);
