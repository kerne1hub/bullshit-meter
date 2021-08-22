import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateProfileSelectLanguagePageActions, PrivateProfileSelectLanguagePageSelectors } from './shared/store';
import { AppState } from '@shared/store';
import { FormGroupState } from 'ngrx-forms';
import { SelectLanguageForm } from '@app/private/shared/forms';

@Injectable()
export class PrivateProfileSelectLanguagePageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateProfileSelectLanguagePageSelectors.isLoading);
  }

  public get languageSelectionForm$(): Observable<FormGroupState<SelectLanguageForm>> {
    return this.store.select(PrivateProfileSelectLanguagePageSelectors.languageSelectionForm);
  }

  constructor(
    private store: Store<AppState>
  ) { }

  public saveSelectedLanguage(): void {
    this.store.dispatch(PrivateProfileSelectLanguagePageActions.saveSelectedLanguage());
  }

  public initPage(): void {
    this.store.dispatch(PrivateProfileSelectLanguagePageActions.initPage());
  }
}
