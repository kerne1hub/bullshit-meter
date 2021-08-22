import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuration } from '@configurations';
import { ApiService as CommonApiService } from '@ronas-it/angular-common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService extends CommonApiService {
  constructor(private http: HttpClient) {
    super(http, { apiUrl: configuration.api.url });
  }

  public patch<T = any>(endpoint: string, data?: any, options?: Record<string, unknown>): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${endpoint}`, data, options);
  }
}
