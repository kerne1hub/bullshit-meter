import { CategoryParams, CategoryRequest, Category } from './models';
import { ApiService } from '@shared/api';
import { Injectable } from '@angular/core';
import { classToPlain, plainToClassFromExist } from 'class-transformer';
import { PaginationResponse } from '@shared/pagination';
import { map } from 'rxjs/operators';
import { pickBy } from 'lodash';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private apiService: ApiService) {}

  public search(params: CategoryParams): Observable<PaginationResponse<Category>> {
    const request = new CategoryRequest({ ...params });

    return this.apiService.get('/categories', pickBy(classToPlain<CategoryRequest>(request)))
      .pipe(
        map((response) => plainToClassFromExist(new PaginationResponse<Category>(Category), response))
      );
  }
}
