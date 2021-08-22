import { ProfileService } from '@shared/profile';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { withLatestFrom, filter, map } from 'rxjs/operators';
import { PrivateOnboardingSelectLanguagePageSelectors } from './selectors';
import { PrivateOnboardingSelectLanguagePageActions } from './actions';
import { PrivateOnboardingPageActions } from '@app/private/onboarding/shared/store';

@Injectable()
export class PrivateOnboardingSelectLanguagePageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingSelectLanguagePageActions.initPage),
      map(() => PrivateOnboardingSelectLanguagePageActions.prefillLanguageForm({
        languageID: this.profileService.selectedLanguageID
      }))
    )
  );

  public saveSelectedLanguage$: Observable<void> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingSelectLanguagePageActions.saveSelectedLanguage),
      withLatestFrom(this.store.select(PrivateOnboardingSelectLanguagePageSelectors.languageSelectionForm)),
      filter(([_, formState]) => formState.isValid),
      map(([{ nextUrl }, { value: { languageID } }]) => {
        this.profileService.saveSelectedLanguage(languageID);
        this.store.dispatch(PrivateOnboardingPageActions.navigateToNextPage({ url: nextUrl }));
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
