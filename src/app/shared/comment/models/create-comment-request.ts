import { Expose } from 'class-transformer';

export class CreateCommentRequest {
  @Expose({ name: 'article_id', toPlainOnly: true })
  public articleID: number;

  @Expose()
  public content: string;

  constructor(request: Partial<CreateCommentRequest>) {
    Object.assign(this, request);
  }
}
