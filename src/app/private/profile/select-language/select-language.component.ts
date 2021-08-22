import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PrivateProfileSelectLanguagePageFacade } from './select-language.facade';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { SelectLanguageForm } from '@app/private/shared/forms';

@Component({
  selector: 'private-profile-select-language-page',
  templateUrl: 'select-language.html',
  styleUrls: ['select-language.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateProfileSelectLanguagePageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public languageSelectionForm$: Observable<FormGroupState<SelectLanguageForm>>;

  constructor(
    private facade: PrivateProfileSelectLanguagePageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
    this.languageSelectionForm$ = this.facade.languageSelectionForm$;
  }

  public saveSelectedLanguage(): void {
    this.facade.saveSelectedLanguage();
  }

  public ngOnInit(): void {
    this.facade.initPage();
  }
}
