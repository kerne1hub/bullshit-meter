import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateProfileStatisticsPageState } from './state';

const selectFeature = (state: AppState) => state.privateProfileStatisticsPage as PrivateProfileStatisticsPageState;

export class PrivateProfileStatisticsPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateProfileStatisticsPageState) => state.isLoading
  );
}
