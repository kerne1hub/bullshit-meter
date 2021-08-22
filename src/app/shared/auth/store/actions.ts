import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { SocialUser } from 'angularx-social-login';
import { AuthResponse } from '@ronas-it/angular-common';
import { User } from '@shared/user';
import { OAuthService } from '@shared/auth/enums/o-auth-service';

export class AuthActions {
  public static socialAuthorize = createAction(
    '[Auth] Social Authorize',
    props<{ loginProvider: string; service: OAuthService }>()
  );

  public static socialAuthorizeSuccess = createAction(
    '[Auth] Social Authorize success',
    props<{ response: SocialUser; service: OAuthService }>()
  );

  public static socialAuthorizeFailure = createAction(
    '[Auth] Social Authorize failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static unauthorize = createAction(
    '[Auth] Unauthorize'
  );

  public static authorizeSuccess = createAction(
    '[Auth] Authorize success',
    props<{ response: AuthResponse<User>; service: OAuthService }>()
  );

  public static authorizeFailure = createAction(
    '[Auth] Authorize failure',
    props<{ response: HttpErrorResponse }>()
  );
}
