import { Action, createReducer, on } from '@ngrx/store';
import { PrivateProfilePreferredTopicsPageActions } from './actions';
import { PrivateProfilePreferredTopicsPageState } from './state';
import { box, onNgrxForms, setValue, updateGroup, validate, wrapReducerWithFormStateUpdate } from 'ngrx-forms';
import { SelectTopicsForm } from '@app/private/shared/forms';
import { required } from 'ngrx-forms/validation';

const initialState = new PrivateProfilePreferredTopicsPageState();

const reducer = wrapReducerWithFormStateUpdate(
  createReducer(
    initialState,
    onNgrxForms(),
    on(PrivateProfilePreferredTopicsPageActions.resetState, () => initialState),
    on(PrivateProfilePreferredTopicsPageActions.prefillSelectTopicsForm, (state, { categories }) => ({
      ...state,
      topicsSelectionForm: updateGroup<SelectTopicsForm>(
        state.topicsSelectionForm,
        {
          categories: setValue(box(categories))
        }
      )
    }))
  ),
  (state) => state.topicsSelectionForm,
  updateGroup<SelectTopicsForm>({ categories: validate(required) })
);

export const privateProfilePreferredTopicsPageReducer = (
  state: PrivateProfilePreferredTopicsPageState | undefined,
  action: Action
): PrivateProfilePreferredTopicsPageState => reducer(state, action);
