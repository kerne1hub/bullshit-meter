import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateProfilePreferredTopicsPageState } from './state';
import { FormGroupState } from 'ngrx-forms';
import { SelectTopicsForm } from '@app/private/shared/forms';

const selectFeature = (state: AppState) => state.privateProfilePreferredTopicsPage as PrivateProfilePreferredTopicsPageState;

export class PrivateProfilePreferredTopicsPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateProfilePreferredTopicsPageState) => state.isLoading
  );

  public static topicsSelectionForm: MemoizedSelector<AppState, FormGroupState<SelectTopicsForm>> = createSelector(
    selectFeature,
    (state: PrivateProfilePreferredTopicsPageState) => state.topicsSelectionForm
  );
}
