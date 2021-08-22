import { createAction, props } from '@ngrx/store';
import { User } from '@shared/user';
import { AuthResponse } from '@ronas-it/angular-common';
import { HttpErrorResponse } from '@angular/common/http';

export class PublicSignInPageActions {
  /* tslint:disable:typedef */
  public static resetState = createAction(
    '[PublicSignInPage] Reset State'
  );

  public static tryGoogleLogin = createAction(
    '[PublicSignInPage] Try login via Google'
  );

  public static loginSuccess = createAction(
    '[PublicSignInPage] Login success',
    props<{ response: AuthResponse<User> }>()
  );

  public static loginFailure = createAction(
    '[PublicSignInPage] Login failure',
    props<{ response: HttpErrorResponse }>()
  );
  /* tslint:enable:typedef */
}
