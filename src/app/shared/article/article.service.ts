import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ArticleRequest, ArticlesFilters, ArticlesRequest } from '@shared/article/models';
import { ApiService } from '@shared/api';
import { classToPlain, plainToClass, plainToClassFromExist } from 'class-transformer';
import { map } from 'rxjs/operators';
import { PaginationResponse } from '@shared/pagination';
import { pickBy } from 'lodash';
import { ArticleRate, ArticleRateRequest, ArticleRelation } from '@shared/article';

@Injectable()
export class ArticleService {
  constructor(
    private apiService: ApiService
  ) {
  }

  public search(filters: ArticlesFilters, params: { relations?: Array<ArticleRelation> } = {}): Observable<PaginationResponse<Article>> {
    const request = new ArticlesRequest({ ...params, ...filters });

    return this.apiService
      .get<PaginationResponse<Article>>('/articles', pickBy(classToPlain<ArticlesRequest>(request)))
      .pipe(
        map((response) => plainToClassFromExist(new PaginationResponse<Article>(Article), response))
      );
  }

  public get(id: number, params: { relations?: Array<ArticleRelation> } = {}): Observable<Article> {
    const request = new ArticleRequest(params);

    return this.apiService.get<Article>(`/articles/${id}`, pickBy(classToPlain<ArticleRequest>(request)))
      .pipe(
        map((response) => plainToClass(Article, response))
      );
  }

  public rate(id: number, rating: ArticleRate): Observable<void> {
    const request = new ArticleRateRequest({ rate: rating });

    return this.apiService
      .post(`/article/${id}/rank`, classToPlain<ArticleRateRequest>(request));
  }
}
