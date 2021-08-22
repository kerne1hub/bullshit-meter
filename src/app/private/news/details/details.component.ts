import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { PrivateNewsDetailsPageFacade } from './details.facade';
import { Observable } from 'rxjs';
import { Article, ArticleRate } from '@shared/article';
import { ActivatedRoute } from '@angular/router';
import { FormGroupState } from 'ngrx-forms';
import { CommentForm } from './shared/forms';
import { Comment, CommentRate } from '@shared/comment';

@Component({
  selector: 'private-news-details-page',
  templateUrl: 'details.html',
  styleUrls: ['details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateNewsDetailsPageComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;
  public article$: Observable<Article>;
  public comments$: Observable<Array<Comment>>;
  public commentFormState$: Observable<FormGroupState<CommentForm>>;
  public totalComments$: Observable<number>;
  public avatarUrl$: Observable<string>;

  constructor(
    private facade: PrivateNewsDetailsPageFacade,
    private route: ActivatedRoute
  ) {
    this.isLoading$ = this.facade.isLoading$;
    this.article$ = this.facade.article$;
    this.comments$ = this.facade.comments$;
    this.commentFormState$ = this.facade.commentForm$;
    this.totalComments$ = this.facade.totalComments$;
    this.avatarUrl$ = this.facade.avatarUrl$;
  }

  public ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      this.facade.init(+param);
    }
  }

  public ngOnDestroy(): void {
    this.facade.resetState();
  }

  public rateItem(rate: ArticleRate): void {
    this.facade.rateItem(rate);
  }

  public createComment(): void {
    this.facade.createComment();
  }

  public rateComment(comment: { id: number; rating: CommentRate }): void {
    this.facade.rateComment(comment.id, comment.rating);
  }

  public onScrollDown(): void {
    this.facade.loadNextCommentPage();
  }
}
