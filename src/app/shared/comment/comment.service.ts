import { Injectable } from '@angular/core';
import { ApiService } from '@shared/api';
import { Observable } from 'rxjs';
import { PaginationResponse } from '@shared/pagination';
import { pickBy } from 'lodash';
import { classToPlain, plainToClass, plainToClassFromExist } from 'class-transformer';
import { map } from 'rxjs/operators';
import {
  Comment,
  CommentsRequest,
  CommentRelation,
  CommentRate,
  CreateCommentRequest
} from '@shared/comment';

@Injectable()
export class CommentService {
  constructor(
    private apiService: ApiService
  ) {
  }

  public search(articleID: number, params: {
    page?: number;
    relations?: Array<CommentRelation>;
  } = {}): Observable<PaginationResponse<Comment>> {
    const request = new CommentsRequest({ articleID, ...params });

    return this.apiService
      .get<PaginationResponse<Comment>>('/comments', pickBy(classToPlain<CommentsRequest>(request)))
      .pipe(
        map((response) => plainToClassFromExist(new PaginationResponse<Comment>(Comment), response))
      );
  }

  public create(articleID: number, content: string): Observable<Comment> {
    const request = new CreateCommentRequest({ articleID, content });

    return this.apiService
      .post<Comment>('/comments', pickBy(classToPlain<CreateCommentRequest>(request)))
      .pipe(
        map((response) => plainToClass(Comment, response))
      );
  }

  public rate(commentID: number, rating: CommentRate): Observable<Comment> {
    return this.apiService
      .post<Comment>(`/comments/${commentID}/${rating}`)
      .pipe(
        map((response) => plainToClass(Comment, response))
      );
  }
}
