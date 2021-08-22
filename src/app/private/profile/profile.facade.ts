import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateProfilePageSelectors } from './shared/store';
import { AppState } from '@shared/store';

@Injectable()
export class PrivateProfilePageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateProfilePageSelectors.isLoading);
  }

  constructor(
    private store: Store<AppState>
  ) { }
}
