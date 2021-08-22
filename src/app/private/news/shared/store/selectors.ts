import { AppState } from '@shared/store';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PrivateNewsPageState } from './state';
import { Article, ArticlesFilters } from '@shared/article/models';

const selectFeature = (state: AppState) => state.privateNewsPage as PrivateNewsPageState;

export class PrivateNewsPageSelectors {
  public static isLoading: MemoizedSelector<AppState, boolean> = createSelector(
    selectFeature,
    (state: PrivateNewsPageState) => state.isLoading
  );

  public static items: MemoizedSelector<AppState, Array<Article>> = createSelector(
    selectFeature,
    (state: PrivateNewsPageState) => state.items
  );

  public static filters: MemoizedSelector<AppState, ArticlesFilters> = createSelector(
    selectFeature,
    (state: PrivateNewsPageState) => state.filters
  );

  public static nextPage: MemoizedSelector<AppState, number> = createSelector(
    selectFeature,
    (state: PrivateNewsPageState) => state.nextPage
  );
}
