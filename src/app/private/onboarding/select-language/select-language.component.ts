import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { PrivateOnboardingSelectLanguagePageFacade } from './select-language.facade';
import { SelectLanguageForm } from '@app/private/shared/forms';

@Component({
  selector: 'private-onboarding-select-language-page',
  templateUrl: 'select-language.html',
  styleUrls: ['select-language.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateOnboardingSelectLanguagePageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public languageSelectionForm$: Observable<FormGroupState<SelectLanguageForm>>;

  constructor(private facade: PrivateOnboardingSelectLanguagePageFacade) {
    this.isLoading$ = this.facade.isLoading$;
    this.languageSelectionForm$ = this.facade.languageSelectionForm$;
  }

  public saveSelectedLanguage(nextUrl: string): void {
    this.facade.saveSelectedLanguage(nextUrl);
  }

  public ngOnInit(): void {
    this.facade.initPage();
  }
}
