import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { ProfileForm } from '@app/private/shared/forms';

export class PrivateProfileChangeNamePageState {
  public isLoading: boolean;
  public profileForm: FormGroupState<ProfileForm>;

  constructor() {
    this.isLoading = false;
    this.profileForm = createFormGroupState<ProfileForm>('ProfileForm', new ProfileForm());
  }
}
