import { Action, createReducer, on } from '@ngrx/store';
import { PrivateProfileChangeNamePageActions } from './actions';
import { PrivateProfileChangeNamePageState } from './state';
import { onNgrxForms, setValue, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { email, required } from 'ngrx-forms/validation';
import { ProfileForm } from '@app/private/shared/forms';

const initialState = new PrivateProfileChangeNamePageState();

const reducer = wrapReducerWithFormStateUpdate(
  createReducer(
    initialState,
    onNgrxForms(),
    on(PrivateProfileChangeNamePageActions.resetState, () => initialState),
    on(PrivateProfileChangeNamePageActions.prefillProfileForm, (state, formState) => ({
      ...state,
      profileForm: updateGroup<ProfileForm>(
        state.profileForm,
        {
          name: setValue(formState.name),
          email: setValue(formState.email)
        }
      )
    }))
  ),
  (state) => state.profileForm,
  updateGroup<ProfileForm>({
    name: validate<string>(required),
    email: validate<string>(required, email)
  })
);

export const privateProfileChangeNamePageReducer = (
  state: PrivateProfileChangeNamePageState | undefined,
  action: Action
): PrivateProfileChangeNamePageState => reducer(state, action);
