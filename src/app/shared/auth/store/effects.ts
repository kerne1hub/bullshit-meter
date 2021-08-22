import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthActions } from '@shared/auth/store';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { SocialAuthService } from 'angularx-social-login';
import { AuthService } from '@shared/auth';
import { ProfileService } from '@shared/profile';
import { User } from '@shared/user';

@Injectable()
export class AuthEffects {
  public socialAuthorize$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.socialAuthorize),
      exhaustMap((action) => from(this.socialAuthService.signIn(action.loginProvider))
        .pipe(
          map((response) => AuthActions.socialAuthorizeSuccess({
            response,
            service: action.service
          })),
          catchError((response) => of(AuthActions.socialAuthorizeFailure({ response })))
        )
      )
    )
  );

  public socialAuthorizeSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.socialAuthorizeSuccess),
      exhaustMap((action) => this.authService.socialAuthorize({
        service: action.service,
        accessToken: action.response.idToken
      })
        .pipe(
          map((response) => AuthActions.authorizeSuccess({ response, service: action.service })),
          catchError((response) => of(AuthActions.authorizeFailure({ response })))
        )
      )
    )
  );

  public authorizeSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authorizeSuccess),
      tap(({ response, service }) => {
        this.profileService.saveUserID(response?.user?.id);
        this.profileService.saveLoginService(service);
        this.profileService.setProfile(response.user as User);
        this.authService.setToken(response.token);
      })
    ),
    { dispatch: false }
  );

  public unauthorize$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.unauthorize),
        tap(() => {
          this.authService.unauthorize();
          this.profileService.resetProfile();
        })
      ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private profileService: ProfileService,
    private router: Router
  ) {
  }
}
