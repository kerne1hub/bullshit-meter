import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateOnboardingCreateProfilePageState } from './state';
import { FormGroupState } from 'ngrx-forms';
import { ProfileForm } from '@app/private/shared/forms';

const selectFeature = (state: AppState) => state.privateOnboardingCreateProfilePage as PrivateOnboardingCreateProfilePageState;

export class PrivateOnboardingCreateProfilePageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateOnboardingCreateProfilePageState) => state.isLoading
  );

  public static createProfileForm: MemoizedSelector<AppState, FormGroupState<ProfileForm>> = createSelector(
    selectFeature,
    (state: PrivateOnboardingCreateProfilePageState) => state.createProfileForm
  );
}
