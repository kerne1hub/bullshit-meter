import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateProfileSettingsPageState } from './state';

const selectFeature = (state: AppState) => state.privateProfileSettingsPage as PrivateProfileSettingsPageState;

export class PrivateProfileSettingsPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateProfileSettingsPageState) => state.isLoading
  );
}
