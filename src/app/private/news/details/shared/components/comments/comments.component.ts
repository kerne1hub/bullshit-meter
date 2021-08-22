import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { CommentForm } from '../../forms';
import { Comment, CommentRate } from '@shared/comment';

@Component({
  selector: 'news-details-comments',
  templateUrl: 'comments.html',
  styleUrls: ['comments.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateNewsDetailsCommentsComponent {
  @Input() comments$: Observable<Array<Comment>>;
  @Input() commentFormState$: Observable<FormGroupState<CommentForm>>;
  @Input() totalComments$: Observable<number>;
  @Input() avatarUrl$: Observable<string>;

  @Output() comment: EventEmitter<void>;
  @Output() rating: EventEmitter<{ id: number; rating: CommentRate }>;
  @Output() scrollDown: EventEmitter<void>;

  constructor() {
    this.comment = new EventEmitter();
    this.rating = new EventEmitter<{ id: number; rating: CommentRate }>();
    this.scrollDown = new EventEmitter();
  }

  public createComment(): void {
    this.comment.emit();
  }

  public rate(id: number, rating: CommentRate): void {
    this.rating.emit({ id, rating });
  }

  public onScrollDown(): void {
    this.scrollDown.emit();
  }
}
