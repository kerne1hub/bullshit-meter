import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { PrivateOnboardingPageActions } from './actions';
import { Observable } from 'rxjs';

@Injectable()
export class PrivateOnboardingPageEffects {

  public navigateToNextPage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrivateOnboardingPageActions.navigateToNextPage),
      tap(({ url }) => {
        this.router.navigate([url]);
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
