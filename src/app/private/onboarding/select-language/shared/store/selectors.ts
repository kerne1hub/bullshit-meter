import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState } from '@shared/store';
import { FormGroupState } from 'ngrx-forms';
import { PrivateOnboardingSelectLanguagePageState } from './state';
import { SelectLanguageForm } from '@app/private/shared/forms';

const selectFeature = (state: AppState) => state.privateOnboardingSelectLanguagePage as PrivateOnboardingSelectLanguagePageState;

export class PrivateOnboardingSelectLanguagePageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateOnboardingSelectLanguagePageState) => state.isLoading
  );

  public static languageSelectionForm: MemoizedSelector<AppState, FormGroupState<SelectLanguageForm>> = createSelector(
    selectFeature,
    (state: PrivateOnboardingSelectLanguagePageState) => state.languageSelectionForm
  );
}
