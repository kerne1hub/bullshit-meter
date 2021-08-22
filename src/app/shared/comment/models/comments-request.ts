import { Expose } from 'class-transformer';
import { CommentRelation } from '@shared/comment';

export class CommentsRequest {
  @Expose()
  public page?: number;

  @Expose({ name: 'article_id', toPlainOnly: true })
  public articleID: number;

  @Expose({ name: 'with', toPlainOnly: true })
  public relations?: Array<CommentRelation>;

  constructor(request: Partial<CommentsRequest>) {
    Object.assign(this, request);
  }
}
