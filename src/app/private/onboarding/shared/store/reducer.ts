import { Action, createReducer, on } from '@ngrx/store';
import { PrivateOnboardingPageActions } from './actions';
import { PrivateOnboardingPageState } from './state';

const initialState = new PrivateOnboardingPageState();

const reducer = createReducer(
  initialState,
  on(PrivateOnboardingPageActions.resetState, () => initialState),
  on(PrivateOnboardingPageActions.navigateToNextPage, () => initialState)
);

export const privateOnboardingPageReducer = (
  state: PrivateOnboardingPageState | undefined,
  action: Action
): PrivateOnboardingPageState => reducer(state, action);
