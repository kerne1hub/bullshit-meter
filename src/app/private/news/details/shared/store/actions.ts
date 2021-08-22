import { createAction, props } from '@ngrx/store';
import { Article, ArticleRate } from '@shared/article';
import { HttpErrorResponse } from '@angular/common/http';
import { Comment, CommentRate } from '@shared/comment';
import { PaginationResponse } from '@shared/pagination';

export class PrivateNewsDetailsPageActions {
  /* tslint:disable:typedef */
  public static resetState = createAction(
    '[PrivateNewsDetailsPage] Reset State'
  );

  public static initPage = createAction(
    '[PrivateNewsDetailsPage] Init page',
    props<{ id: number }>()
  );

  public static loadItem = createAction(
    '[PrivateNewsDetailsPage] Load item',
    props<{ id: number }>()
  );

  public static loadItemSuccess = createAction(
    '[PrivateNewsDetailsPage] Load item success',
    props<{ response: Article }>()
  );

  public static loadItemFailure = createAction(
    '[PrivateNewsDetailsPage] Load item failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static loadComments = createAction(
    '[PrivateNewsDetailsPage] Load comments',
    props<{ id: number }>()
  );

  public static loadCommentsSuccess = createAction(
    '[PrivateNewsDetailsPage] Load comments success',
    props<{ response: PaginationResponse<Comment> }>()
  );

  public static loadCommentsFailure = createAction(
    '[PrivateNewsDetailsPage] Load comments failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static rateItem = createAction(
    '[PrivateNewsDetailsPage] Rate item',
    props<{ rate: ArticleRate }>()
  );

  public static rateItemSuccess = createAction(
    '[PrivateNewsDetailsPage] Rate item success',
    props<{ id: number }>()
  );

  public static rateItemFailure = createAction(
    '[PrivateNewsDetailsPage] Rate item failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static createComment = createAction(
    '[PrivateNewsDetailsPage] Create comment'
  );

  public static createCommentSuccess = createAction(
    '[PrivateNewsDetailsPage] Create comment success',
    props<{ response: Comment }>()
  );

  public static createCommentFailure = createAction(
    '[PrivateNewsDetailsPage] Create comment failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static rateComment = createAction(
    '[PrivateNewsDetailsPage] Rate comment',
    props<{ id: number; rating: CommentRate }>()
  );

  public static rateCommentSuccess = createAction(
    '[PrivateNewsDetailsPage] Rate comment success',
    props<{ response: Comment }>()
  );

  public static rateCommentFailure = createAction(
    '[PrivateNewsDetailsPage] Rate comment failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static loadNextCommentPage = createAction(
    '[PrivateNewsDetailsPage] Load next comment page'
  );
  /* tslint:enable:typedef */
}
