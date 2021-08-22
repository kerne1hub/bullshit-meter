import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PrivateProfilePageActions } from './actions';

@Injectable()
export class PrivateProfilePageEffects {
  public profileSettingsUpdated$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(PrivateProfilePageActions.profileSettingsUpdated),
        tap(() => {
          this.router.navigate(['/profile/settings']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private router: Router
  ) { }
}
