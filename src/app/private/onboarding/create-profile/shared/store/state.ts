import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { ProfileForm } from '@app/private/shared/forms';

export class PrivateOnboardingCreateProfilePageState {
  public isLoading: boolean;
  public createProfileForm: FormGroupState<ProfileForm>;

  constructor() {
    this.isLoading = false;
    this.createProfileForm = createFormGroupState<ProfileForm>('CreateProfileForm', new ProfileForm());
  }
}
