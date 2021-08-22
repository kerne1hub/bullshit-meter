import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateProfileChangeNamePageState } from './state';
import { FormGroupState } from 'ngrx-forms';
import { ProfileForm } from '@app/private/shared/forms';

const selectFeature = (state: AppState) => state.privateProfileChangeNamePage as PrivateProfileChangeNamePageState;

export class PrivateProfileChangeNamePageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateProfileChangeNamePageState) => state.isLoading
  );

  public static profileForm: MemoizedSelector<AppState, FormGroupState<ProfileForm>> = createSelector(
    selectFeature,
    (state: PrivateProfileChangeNamePageState) => state.profileForm
  );
}
