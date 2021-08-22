import { Injectable, Injector } from '@angular/core';
import { AuthService as CommonAuthService } from '@ronas-it/angular-common';
import { User } from '@shared/user';
import { classToPlain, plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OAuthService } from './enums';
import { AuthGoogleCredentials, AuthResponse } from './models';

@Injectable()
export class AuthService extends CommonAuthService<User> {
  constructor(protected injector: Injector) {
    super(injector);
  }

  public socialAuthorize(params: { service: OAuthService; accessToken: string }): Observable<AuthResponse> {
    const credentials = (params.service === 'google')
      ? new AuthGoogleCredentials({ accessToken: params.accessToken })
      : null;

    if (!credentials) {
      throw new Error('Unrecognized OAuth service');
    }

    return this.apiService.post(`/login/${params.service}`, classToPlain(credentials)).pipe(
      map((response) => ({
        ...response,
        user: plainToClass(User, response.user)
      }))
    );
  }
}
