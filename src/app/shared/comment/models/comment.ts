import { DateTime } from 'luxon';
import { Expose, Type } from 'class-transformer';
import { TransformDate } from '@shared/class-transformer';
import { User } from '@shared/user';

export class Comment {
  @Expose()
  public id: number;

  @Expose({ name: 'article_id' })
  public articleId: number;

  @Expose({ name: 'user_id' })
  public userId: number;

  @Type(() => User)
  @Expose()
  public user?: User;

  @Expose()
  public content: string;

  @Type(() => DateTime)
  @TransformDate()
  @Expose({ name: 'created_at' })
  public createdAt: DateTime;

  @Type(() => DateTime)
  @TransformDate()
  @Expose({ name: 'updated_at' })
  public updatedAt: DateTime;

  @Expose()
  public likes?: Array<any>;

  @Expose()
  public dislikes?: Array<any>;

  @Expose({ name: 'likes_count' })
  public likesCount?: number;

  @Expose({ name: 'dislikes_count' })
  public dislikesCount?: number;

  @Expose({ name: 'is_user_liked' })
  public isUserLiked: boolean;

  @Expose({ name: 'is_user_disliked' })
  public isUserDisliked: boolean;

  public get likesNumber(): number {
    return this.likesCount || this.likes?.length || 0;
  }

  public get dislikesNumber(): number {
    return this.dislikesCount || this.dislikes?.length || 0;
  }

  constructor(comment: Partial<Comment>) {
    Object.assign(this, comment);
  }
}
