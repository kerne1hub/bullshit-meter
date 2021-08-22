import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, withLatestFrom } from 'rxjs/operators';
import { PrivateProfileChangeNamePageActions } from './actions';
import { ProfileService } from '@shared/profile';
import { PrivateProfileChangeNamePageSelectors } from './selectors';
import { PrivateProfilePageActions } from '@app/private/profile/shared/store';

@Injectable()
export class PrivateProfileChangeNamePageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateProfileChangeNamePageActions.initPage),
      exhaustMap(() => this.profileService.profile$),
      map(({ name, email }) => PrivateProfileChangeNamePageActions.prefillProfileForm({ name, email }))
    )
  );

  public updateProfile$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateProfileChangeNamePageActions.updateProfile),
      withLatestFrom(this.store.select(PrivateProfileChangeNamePageSelectors.profileForm)),
      filter(([_, formState]) => formState.isValid),
      exhaustMap(([_, { value: { name, email } }]) => this.profileService.updateUserProfile({ name, email })
        .pipe(
          map((response) => PrivateProfileChangeNamePageActions.updateProfileSuccess({ response })),
          catchError((response) => of(PrivateProfileChangeNamePageActions.updateProfileFailure({ response })))
        )
      )
    )
  );

  public updateProfileSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateProfileChangeNamePageActions.updateProfileSuccess),
      map(() => PrivateProfilePageActions.profileSettingsUpdated())
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }
}
