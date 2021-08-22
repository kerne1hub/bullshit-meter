import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PublicSignInPageActions } from '@app/public/sign-in/shared/store';
import { map } from 'rxjs/operators';
import { AuthActions } from '@shared/auth/store';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { OAuthService } from '@shared/auth/enums';

@Injectable()
export class PublicSignInPageEffects {
  public tryGoogleLogin$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicSignInPageActions.tryGoogleLogin),
      map(() => AuthActions.socialAuthorize({
          loginProvider: GoogleLoginProvider.PROVIDER_ID,
          service: OAuthService.GOOGLE
        })
      )
    )
  );

  public authSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authorizeSuccess),
      map((response) => {
        this.router.navigate(['/']);

        return PublicSignInPageActions.loginSuccess(response);
      })
    )
  );

  public authFailure$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authorizeFailure),
      // TODO: Add alert
      map((response) => PublicSignInPageActions.loginFailure(response))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private router: Router
  ) {
  }
}
