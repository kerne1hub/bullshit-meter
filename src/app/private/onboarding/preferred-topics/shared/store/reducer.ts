import { SelectTopicsForm } from '@app/private/shared/forms';
import { Action, createReducer, on } from '@ngrx/store';
import { onNgrxForms, updateGroup, validate, wrapReducerWithFormStateUpdate, box, setValue } from 'ngrx-forms';
import { PrivateOnboardingPreferredTopicsPageActions } from './actions';
import { PrivateOnboardingPreferredTopicsPageState } from './state';
import { required } from 'ngrx-forms/validation';

const initialState = new PrivateOnboardingPreferredTopicsPageState();

const reducer = wrapReducerWithFormStateUpdate(
  createReducer(
    initialState,
    onNgrxForms(),
    on(PrivateOnboardingPreferredTopicsPageActions.resetState, () => initialState),
    on(PrivateOnboardingPreferredTopicsPageActions.prefillSelectTopicsForm, (state, { categories }) => ({
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

export const privateOnboardingPreferredTopicsPageReducer = (
  state: PrivateOnboardingPreferredTopicsPageState | undefined,
  action: Action
): PrivateOnboardingPreferredTopicsPageState => reducer(state, action);
