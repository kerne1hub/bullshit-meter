import { Action, createReducer, on } from '@ngrx/store';
import { PrivateOnboardingCreateProfilePageActions } from './actions';
import { PrivateOnboardingCreateProfilePageState } from './state';
import { onNgrxForms, setValue, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { email, required } from 'ngrx-forms/validation';
import { ProfileForm } from '@app/private/shared/forms';

const initialState = new PrivateOnboardingCreateProfilePageState();

const reducer = wrapReducerWithFormStateUpdate(
  createReducer(
    initialState,
    onNgrxForms(),
    on(PrivateOnboardingCreateProfilePageActions.resetState, () => initialState),
    on(PrivateOnboardingCreateProfilePageActions.uploadAvatar, (state) => ({
      ...state,
      isLoading: true
    })),
    on(PrivateOnboardingCreateProfilePageActions.uploadAvatarSuccess,
      PrivateOnboardingCreateProfilePageActions.uploadAvatarFailure, (state) => ({
      ...state,
      isLoading: false
    })),
    on(PrivateOnboardingCreateProfilePageActions.prefillProfileForm, (state, formState) => ({
      ...state,
      createProfileForm: updateGroup<ProfileForm>(
        state.createProfileForm,
        {
          name: setValue(formState.name),
          email: setValue(formState.email)
        }
      )
    }))
  ),
  (state) => state.createProfileForm,
  updateGroup<ProfileForm>({
    name: validate<string>(required),
    email: validate<string>(required, email)
  })
);

export const privateOnboardingCreateProfilePageReducer = (
  state: PrivateOnboardingCreateProfilePageState | undefined,
  action: Action
): PrivateOnboardingCreateProfilePageState => reducer(state, action);
