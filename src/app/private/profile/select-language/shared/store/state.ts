import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { SelectLanguageForm } from '@app/private/shared/forms';

export class PrivateProfileSelectLanguagePageState {
  public isLoading: boolean;
  public languageSelectionForm: FormGroupState<SelectLanguageForm>;

  constructor() {
    this.isLoading = false;
    this.languageSelectionForm = createFormGroupState<SelectLanguageForm>(
      'SelectLanguageForm',
      new SelectLanguageForm()
    );
  }
}
