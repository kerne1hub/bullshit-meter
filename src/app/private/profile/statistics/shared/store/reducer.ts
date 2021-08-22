import { Action, createReducer, on } from '@ngrx/store';
import { PrivateProfileStatisticsPageActions } from './actions';
import { PrivateProfileStatisticsPageState } from './state';

const initialState = new PrivateProfileStatisticsPageState();

const reducer = createReducer(
  initialState,
  on(PrivateProfileStatisticsPageActions.resetState, () => initialState)
);

export const privateProfileStatisticsPageReducer = (
  state: PrivateProfileStatisticsPageState | undefined,
  action: Action
): PrivateProfileStatisticsPageState => reducer(state, action);
