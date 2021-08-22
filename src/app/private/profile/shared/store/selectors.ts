import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateProfilePageState } from './state';

const selectFeature = (state: AppState) => state.privateProfilePage as PrivateProfilePageState;

export class PrivateProfilePageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateProfilePageState) => state.isLoading
  );
}
