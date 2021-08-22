import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { SelectTopicsForm } from '@app/private/shared/forms';

export class PrivateOnboardingPreferredTopicsPageState {
  public isLoading: boolean;
  public topicsSelectionForm: FormGroupState<SelectTopicsForm>;

  constructor() {
    this.isLoading = false;
    this.topicsSelectionForm = createFormGroupState<SelectTopicsForm>('SelectTopicsForm', new SelectTopicsForm());
  }
}
