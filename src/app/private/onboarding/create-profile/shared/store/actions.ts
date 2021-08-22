import { createAction, props } from '@ngrx/store';

export class PrivateOnboardingCreateProfilePageActions {
  /* tslint:disable:typedef */
  public static initPage = createAction(
    '[PrivateOnboardingCreateProfilePage] Init Page'
  );

  public static uploadAvatar = createAction(
    '[PrivateOnboardingCreateProfilePage] Upload Avatar',
    props<{ file: File }>()
  );

  public static uploadAvatarSuccess = createAction(
    '[PrivateOnboardingCreateProfilePage] Upload Avatar Success'
  );

  public static uploadAvatarFailure = createAction(
    '[PrivateOnboardingCreateProfilePage] Upload Avatar Failure'
  );

  public static prefillProfileForm = createAction(
    '[PrivateOnboardingCreateProfilePage] Prefill Create Profile Form',
    props<{ name: string; email: string }>()
  );

  public static resetState = createAction(
    '[PrivateOnboardingCreateProfilePage] Reset State'
  );

  public static updateProfile = createAction(
    '[PrivateOnboardingCreateProfilePage] Update Profile',
    props<{ nextUrl: string }>()
  );
  /* tslint:enable:typedef */
}
