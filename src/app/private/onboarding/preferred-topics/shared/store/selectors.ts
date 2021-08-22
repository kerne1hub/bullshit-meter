import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateOnboardingPreferredTopicsPageState } from './state';
import { FormGroupState } from 'ngrx-forms';
import { SelectTopicsForm } from '@app/private/shared/forms';

const selectFeature = (state: AppState) => state.privateOnboardingPreferredTopicsPage as PrivateOnboardingPreferredTopicsPageState;

export class PrivateOnboardingPreferredTopicsPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateOnboardingPreferredTopicsPageState) => state.isLoading
  );

  public static topicsSelectionForm: MemoizedSelector<AppState, FormGroupState<SelectTopicsForm>> = createSelector(
    selectFeature,
    (state: PrivateOnboardingPreferredTopicsPageState) => state.topicsSelectionForm
  );
}
