import { NgModule } from '@angular/core';
import { configuration } from '@configurations';
import { AuthModule as CommonAuthModule, UserService } from '@ronas-it/angular-common';
import { ProfileService } from '@shared/profile';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonAuthModule.forRoot({
      allowedDomains: configuration.api.allowedDomains,
      disallowedRoutes: configuration.api.disallowedRoutes,
      unauthenticatedRoute: 'sign-in',
      authenticatedRoute: '',
      authService: AuthService
    })
  ],
  providers: [
    AuthService,
    { provide: UserService, useExisting: ProfileService }
  ]
})
export class AuthModule { }
