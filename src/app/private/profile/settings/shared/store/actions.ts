import { createAction, props } from '@ngrx/store';

export class PrivateProfileSettingsPageActions {
  /* tslint:disable:typedef */
  public static resetState = createAction(
    '[PrivateProfileSettingsPage] Reset State'
  );

  public static uploadAvatar = createAction(
    '[PrivateProfileSettingsPage] Upload Avatar',
    props<{ file: File }>()
  );

  public static uploadAvatarSuccess = createAction(
    '[PrivateProfileSettingsPage] Upload Avatar Success'
  );

  public static uploadAvatarFailure = createAction(
    '[PrivateProfileSettingsPage] Upload Avatar Failure'
  );
  /* tslint:enable:typedef */
}
