import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { ProfileService } from '@shared/profile';
import { PrivateProfileSelectLanguagePageActions } from './actions';
import { PrivateProfileSelectLanguagePageSelectors } from './selectors';
import { PrivateProfilePageActions } from '@app/private/profile/shared/store';

@Injectable()
export class PrivateProfileSelectLanguagePageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateProfileSelectLanguagePageActions.initPage),
      map(() => PrivateProfileSelectLanguagePageActions.prefillLanguageForm({
        languageID: this.profileService.selectedLanguageID
      }))
    )
  );

  public saveSelectedLanguage$: Observable<void> = createEffect(() =>
      this.actions$.pipe(
        ofType(PrivateProfileSelectLanguagePageActions.saveSelectedLanguage),
        withLatestFrom(this.store.select(PrivateProfileSelectLanguagePageSelectors.languageSelectionForm)),
        filter(([_, formState]) => formState.isValid),
        map(([_, { value: { languageID } }]) => {
          this.profileService.saveSelectedLanguage(languageID);
          this.store.dispatch(PrivateProfilePageActions.profileSettingsUpdated());
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }
}
