import { createAction } from '@ngrx/store';

export class PrivateProfilePageActions {
  /* tslint:disable:typedef */
  public static resetState = createAction(
    '[PrivateProfilePage] Reset State'
  );

  public static profileSettingsUpdated = createAction(
    '[PrivateProfilePage] Profile Settings updated'
  );
  /* tslint:enable:typedef */
}
