import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateOnboardingSelectLanguagePageActions, PrivateOnboardingSelectLanguagePageSelectors } from './shared/store';
import { AppState } from '@shared/store';
import { FormGroupState } from 'ngrx-forms';
import { SelectLanguageForm } from '@app/private/shared/forms';

@Injectable()
export class PrivateOnboardingSelectLanguagePageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateOnboardingSelectLanguagePageSelectors.isLoading);
  }

  public get languageSelectionForm$(): Observable<FormGroupState<SelectLanguageForm>> {
    return this.store.select(PrivateOnboardingSelectLanguagePageSelectors.languageSelectionForm);
  }

  constructor(private store: Store<AppState>) {}

  public saveSelectedLanguage(nextUrl: string): void {
    this.store.dispatch(PrivateOnboardingSelectLanguagePageActions.saveSelectedLanguage({ nextUrl }));
  }

  public initPage(): void {
    this.store.dispatch(PrivateOnboardingSelectLanguagePageActions.initPage());
  }
}
