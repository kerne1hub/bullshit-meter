import { Action, createReducer, on } from '@ngrx/store';
import { PublicSignInPageActions } from './actions';
import { PublicSignInPageState } from './state';

const initialState = new PublicSignInPageState();

const reducer = createReducer(
  initialState,
  on(PublicSignInPageActions.resetState, () => initialState),
  on(PublicSignInPageActions.tryGoogleLogin, (state) => ({
    ...state,
    isLoading: true
  })),
  on(
    PublicSignInPageActions.loginSuccess,
    PublicSignInPageActions.loginFailure,
    (state) => ({
    ...state,
    isLoading: false
  }))
);

export const publicSignInPageReducer = (state: PublicSignInPageState | undefined, action: Action): PublicSignInPageState => reducer(state, action);
