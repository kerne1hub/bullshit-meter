import { PrivateOnboardingPreferredTopicsPageSelectors } from './selectors';
import { ProfileService } from '@shared/profile';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { PrivateOnboardingPreferredTopicsPageActions } from './actions';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { PrivateOnboardingPageActions } from '@app/private/onboarding/shared/store';
import { unbox } from 'ngrx-forms';

@Injectable()
export class PrivateOnboardingPreferredTopicsPageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingPreferredTopicsPageActions.initPage),
      map(() => PrivateOnboardingPreferredTopicsPageActions.prefillSelectTopicsForm({
        categories: this.profileService.preferredTopics
      }))
    )
  );

  public saveCategories$: Observable<void> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingPreferredTopicsPageActions.saveCategories),
      withLatestFrom(this.store.select(PrivateOnboardingPreferredTopicsPageSelectors.topicsSelectionForm)),
      filter(([_, formState]) => formState.isValid),
      map(([{ nextUrl }, { value: categories }]) => {
        this.profileService.saveCategories(unbox(categories).categories);
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
