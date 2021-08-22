import { PrivateOnboardingCreateProfilePageSelectors } from '@app/private/onboarding/create-profile/shared/store';
import { PrivateOnboardingCreateProfilePageActions } from './actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { exhaustMap, filter, map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';
import { PrivateOnboardingPageActions } from '@app/private/onboarding/shared/store';
import { ProfileService } from '@shared/profile';

@Injectable()
export class PrivateOnboardingCreateProfilePageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingCreateProfilePageActions.initPage),
      exhaustMap(() => this.profileService.profile$),
      map(({ name, email }) => PrivateOnboardingCreateProfilePageActions.prefillProfileForm({ name, email }))
    )
  );

  public uploadAvatar$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingCreateProfilePageActions.uploadAvatar),
      exhaustMap(({ file }) => this.profileService.updateUserProfile({ avatarFile: file }).pipe(
        map(() => PrivateOnboardingCreateProfilePageActions.uploadAvatarSuccess()),
        catchError(() => of(PrivateOnboardingCreateProfilePageActions.uploadAvatarFailure()))
      ))
    )
  );

  public updateProfile$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingCreateProfilePageActions.updateProfile),
      withLatestFrom(this.store.select(PrivateOnboardingCreateProfilePageSelectors.createProfileForm)),
      filter(([_, formState]) => formState.isValid),
      exhaustMap(([{ nextUrl }, { value: { name, email } }]) => this.profileService.updateUserProfile({ name, email })
        .pipe(
          map(() => PrivateOnboardingPageActions.navigateToNextPage({ url: nextUrl }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }
}
