import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store';
import { PublicSignInPageActions } from './shared/store';

@Injectable()
export class PublicSignInPageFacade {
  public isLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  public googleLogin(): void {
    this.store.dispatch(PublicSignInPageActions.tryGoogleLogin());
  }
}
