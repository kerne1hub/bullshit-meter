import { Action, createReducer, on } from '@ngrx/store';
import { PrivateProfileSelectLanguagePageActions } from './actions';
import { PrivateProfileSelectLanguagePageState } from './state';
import { onNgrxForms, setValue, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
import { SelectLanguageForm } from '@app/private/shared/forms';

const initialState = new PrivateProfileSelectLanguagePageState();

const reducer = wrapReducerWithFormStateUpdate(
  createReducer(
    initialState,
    onNgrxForms(),
    on(PrivateProfileSelectLanguagePageActions.resetState, () => initialState),
    on(PrivateProfileSelectLanguagePageActions.prefillLanguageForm, (state, { languageID }) => ({
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

export const privateProfileSelectLanguagePageReducer = (
  state: PrivateProfileSelectLanguagePageState | undefined,
  action: Action
): PrivateProfileSelectLanguagePageState => reducer(state, action);
