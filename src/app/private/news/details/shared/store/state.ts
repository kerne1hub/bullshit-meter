import { Article } from '@shared/article';
import { Comment } from '@shared/comment';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { CommentForm } from '@app/private/news/details/shared/forms';

export class PrivateNewsDetailsPageState {
  public isLoading: boolean;
  public item: Article;
  public isCommentsLoading: boolean;
  public comments: Array<Comment>;
  public commentForm: FormGroupState<CommentForm>;
  public id: number;
  public totalComments: number;
  public nextCommentsPage: number;

  constructor() {
    this.isLoading = false;
    this.isCommentsLoading = false;
    this.comments = [];
    this.commentForm = createFormGroupState('CommentForm', new CommentForm());
    this.totalComments = 0;
    this.nextCommentsPage = 1;
  }
}
