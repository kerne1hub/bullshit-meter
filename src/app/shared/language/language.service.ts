import { Language, LanguageParams, LanguageRequest } from './models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Injectable } from '@angular/core';
import { PaginationResponse } from '@shared/pagination/models';
import { plainToClassFromExist, classToPlain } from 'class-transformer';
import { pickBy } from 'lodash';

@Injectable()
export class LanguageService {
  constructor(private apiService: ApiService) {}

  public search(params: LanguageParams): Observable<PaginationResponse<Language>> {
    const request = new LanguageRequest({ ...params });

    return this.apiService.get('/languages', pickBy(classToPlain<LanguageRequest>(request)))
    .pipe(
      map((response) => plainToClassFromExist(new PaginationResponse<Language>(Language), response))
    );
  }
}

