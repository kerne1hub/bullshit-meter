import { Action, createReducer, on } from '@ngrx/store';
import { PrivateNewsPageActions } from './actions';
import { PrivateNewsPageState } from './state';

const initialState = new PrivateNewsPageState();

const reducer = createReducer(
  initialState,
  on(PrivateNewsPageActions.resetState, () => initialState),
  on(PrivateNewsPageActions.changeFilters, (state, action) => ({
    ...state,
    items: initialState.items,
    filters: {
      ...state.filters,
      ...action.filters,
      page: initialState.nextPage
    }
  })),
  on(PrivateNewsPageActions.loadItems, (state) => ({
    ...state,
    isLoading: true
  })),
  on(PrivateNewsPageActions.loadNextPage, (state) => ({
    ...state,
    filters: { ...state.filters, page: state.nextPage },
  })),
  on(PrivateNewsPageActions.loadItemsSuccess, (state, action) => ({
    ...state,
    items: state.items.concat(action.response.data),
    nextPage: action.response.currentPage + 1,
    isLoading: false
  })),
  on(PrivateNewsPageActions.loadItemSuccess, (state, action) => ({
    ...state,
    items: state.items.map((a) => a.id !== action.response.id ? a : action.response)
  }))
);

export const privateNewsPageReducer = (state: PrivateNewsPageState | undefined, action: Action): PrivateNewsPageState => reducer(state, action);
