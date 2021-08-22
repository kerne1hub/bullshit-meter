import { createAction, props } from '@ngrx/store';
import { User } from '@shared/user';
import { HttpErrorResponse } from '@angular/common/http';

export class PrivateProfileChangeNamePageActions {
  /* tslint:disable:typedef */
  public static resetState = createAction(
    '[PrivateProfileChangeNamePage] Reset State'
  );

  public static initPage = createAction(
    '[PrivateProfileChangeNamePage] Init Page'
  );

  public static prefillProfileForm = createAction(
    '[PrivateProfileChangeNamePage] Prefill Profile Form',
    props<{ name: string; email: string }>()
  );

  public static updateProfile = createAction(
    '[PrivateProfileChangeNamePage] Update Profile'
  );

  public static updateProfileSuccess = createAction(
    '[PrivateProfileChangeNamePage] Update Profile success',
    props<{ response: User }>()
  );

  public static updateProfileFailure = createAction(
    '[PrivateProfileChangeNamePage] Update Profile failure',
    props<{ response: HttpErrorResponse }>()
  );
  /* tslint:enable:typedef */
}
