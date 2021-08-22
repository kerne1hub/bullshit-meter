import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PublicSignInPageState } from './state';

const selectFeature = (state: AppState) => state.publicSignInPage as PublicSignInPageState;

export class PublicSignInPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PublicSignInPageState) => state.isLoading
  );
}
