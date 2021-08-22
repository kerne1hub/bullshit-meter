import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { ProfileService } from '@shared/profile';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { unbox } from 'ngrx-forms';
import { PrivateProfilePreferredTopicsPageActions } from './actions';
import { PrivateProfilePreferredTopicsPageSelectors } from './selectors';
import { PrivateProfilePageActions } from '@app/private/profile/shared/store';

@Injectable()
export class PrivateProfilePreferredTopicsPageEffects {
  public initPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateProfilePreferredTopicsPageActions.initPage),
      map(() => PrivateProfilePreferredTopicsPageActions.prefillSelectTopicsForm({
        categories: this.profileService.preferredTopics
      }))
    )
  );

  public saveCategories$: Observable<void> = createEffect(() =>
      this.actions$.pipe(
        ofType(PrivateProfilePreferredTopicsPageActions.saveCategories),
        withLatestFrom(this.store.select(PrivateProfilePreferredTopicsPageSelectors.topicsSelectionForm)),
        filter(([_, formState]) => formState.isValid),
        map(([_, { value: categories }]) => {
          this.profileService.saveCategories(unbox(categories).categories);
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
