import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateProfileSelectLanguagePageState } from './state';
import { FormGroupState } from 'ngrx-forms';
import { SelectLanguageForm } from '@app/private/shared/forms';

const selectFeature = (state: AppState) => state.privateProfileSelectLanguagePage as PrivateProfileSelectLanguagePageState;

export class PrivateProfileSelectLanguagePageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateProfileSelectLanguagePageState) => state.isLoading
  );

  public static languageSelectionForm: MemoizedSelector<AppState, FormGroupState<SelectLanguageForm>> = createSelector(
    selectFeature,
    (state: PrivateProfileSelectLanguagePageState) => state.languageSelectionForm
  );
}
