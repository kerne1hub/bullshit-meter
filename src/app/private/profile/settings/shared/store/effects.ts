import { ProfileService } from '@shared/profile';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { PrivateProfileSettingsPageActions } from './';
import { Observable, of } from 'rxjs';

@Injectable()
export class PrivateProfileSettingsPageEffects {
  public uploadAvatar$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateProfileSettingsPageActions.uploadAvatar),
      exhaustMap(({ file }) => this.profileService.updateUserProfile({ avatarFile: file }).pipe(
        map(() => PrivateProfileSettingsPageActions.uploadAvatarSuccess()),
        catchError(() => of(PrivateProfileSettingsPageActions.uploadAvatarFailure()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) { }
}
