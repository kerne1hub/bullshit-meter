import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateProfilePreferredTopicsPageActions, PrivateProfilePreferredTopicsPageSelectors } from './shared/store';
import { AppState } from '@shared/store';
import { FormGroupState } from 'ngrx-forms';
import { SelectTopicsForm } from '@app/private/shared/forms';

@Injectable()
export class PrivateProfilePreferredTopicsPageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateProfilePreferredTopicsPageSelectors.isLoading);
  }

  public get topicsSelection$(): Observable<FormGroupState<SelectTopicsForm>> {
    return this.store.select(PrivateProfilePreferredTopicsPageSelectors.topicsSelectionForm);
  }

  constructor(
    private store: Store<AppState>
  ) { }

  public saveCategories(): void {
    this.store.dispatch(PrivateProfilePreferredTopicsPageActions.saveCategories());
  }

  public onInit(): void {
    this.store.dispatch(PrivateProfilePreferredTopicsPageActions.initPage());
  }
}
