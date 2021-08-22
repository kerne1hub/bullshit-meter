import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment, CommentRate } from '@shared/comment';

@Component({
  selector: 'news-details-comment',
  templateUrl: 'comment.html',
  styleUrls: ['comment.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateNewsDetailsCommentComponent {
  @Input() comment: Comment;

  @Output() rating: EventEmitter<CommentRate>;

  public get commentRating(): typeof CommentRate {
    return CommentRate;
  }

  public get dateFormat(): string {
    return 'd MMMM';
  }

  constructor() {
    this.rating = new EventEmitter<CommentRate>();
  }

  public rate(rating: CommentRate): void {
    this.rating.emit(rating);
  }

  public getButtonStyle(rating: CommentRate): string {
    if (this.comment.isUserLiked && rating === CommentRate.LIKE ||
      this.comment.isUserDisliked && rating === CommentRate.DISLIKE) {
      return 'triggered';
    }

    return '';
  }

  public getCounter(rating: CommentRate): number {
    switch (rating) {
      case CommentRate.LIKE:
        return this.comment.likesNumber;
      case CommentRate.DISLIKE:
        return this.comment.dislikesNumber;
    }
  }
}
