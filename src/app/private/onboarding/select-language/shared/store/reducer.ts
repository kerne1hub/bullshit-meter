import { Action, createReducer, on } from '@ngrx/store';
import { onNgrxForms, setValue, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
import { PrivateOnboardingSelectLanguagePageActions } from './actions';
import { PrivateOnboardingSelectLanguagePageState } from './state';
import { SelectLanguageForm } from '@app/private/shared/forms';

const initialState = new PrivateOnboardingSelectLanguagePageState();

const reducer = wrapReducerWithFormStateUpdate(
  createReducer(
    initialState,
    onNgrxForms(),
    on(PrivateOnboardingSelectLanguagePageActions.resetState, () => initialState),
    on(PrivateOnboardingSelectLanguagePageActions.prefillLanguageForm, (state, { languageID }) => ({
      ...state,
      languageSelectionForm: updateGroup<SelectLanguageForm>(
        state.languageSelectionForm,
        {
          languageID: setValue(languageID)
        }
      )
    }))
  ),
  (state) => state.languageSelectionForm,
  updateGroup<SelectLanguageForm>({ languageID: validate<number | null>(required) })
);

export const privateOnboardingSelectLanguagePageReducer = (
  state: PrivateOnboardingSelectLanguagePageState | undefined,
  action: Action
): PrivateOnboardingSelectLanguagePageState => reducer(state, action);
