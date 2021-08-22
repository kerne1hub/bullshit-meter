import { SelectTopicsForm } from '@app/private/shared/forms';
import { FormGroupState } from 'ngrx-forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateOnboardingPreferredTopicsPageActions, PrivateOnboardingPreferredTopicsPageSelectors } from './shared/store';
import { AppState } from '@shared/store';

@Injectable()
export class PrivateOnboardingPreferredTopicsPageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateOnboardingPreferredTopicsPageSelectors.isLoading);
  }

  public get topicsSelection$(): Observable<FormGroupState<SelectTopicsForm>> {
    return this.store.select(PrivateOnboardingPreferredTopicsPageSelectors.topicsSelectionForm);
  }

  constructor(
    private store: Store<AppState>
  ) { }

  public saveCategories(nextUrl: string): void {
    this.store.dispatch(PrivateOnboardingPreferredTopicsPageActions.saveCategories({ nextUrl }));
  }

  public onInit(): void {
    this.store.dispatch(PrivateOnboardingPreferredTopicsPageActions.initPage());
  }
}
