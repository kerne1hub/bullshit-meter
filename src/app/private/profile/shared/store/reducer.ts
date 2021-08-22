import { Action, createReducer, on } from '@ngrx/store';
import { PrivateProfilePageActions } from './actions';
import { PrivateProfilePageState } from './state';

const initialState = new PrivateProfilePageState();

const reducer = createReducer(initialState, on(PrivateProfilePageActions.resetState, () => initialState));

export const privateProfilePageReducer = (state: PrivateProfilePageState | undefined, action: Action): PrivateProfilePageState => reducer(state, action);
