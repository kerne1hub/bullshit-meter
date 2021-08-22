import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateOnboardingPageState } from './state';

const selectFeature = (state: AppState) => state.privateOnboardingPage as PrivateOnboardingPageState;

export class PrivateOnboardingPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateOnboardingPageState) => state.isLoading
  );
}
