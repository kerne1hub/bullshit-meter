import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateProfileStatisticsPageSelectors } from './shared/store';
import { AppState } from '@shared/store';

@Injectable()
export class PrivateProfileStatisticsPageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateProfileStatisticsPageSelectors.isLoading);
  }

  constructor(
    private store: Store<AppState>
  ) { }
}
