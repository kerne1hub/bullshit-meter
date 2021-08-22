import { Action, createReducer, on } from '@ngrx/store';
import { PrivateProfileSettingsPageActions } from './actions';
import { PrivateProfileSettingsPageState } from './state';

const initialState = new PrivateProfileSettingsPageState();

const reducer = createReducer(
  initialState,
  on(PrivateProfileSettingsPageActions.resetState, () => initialState),
  on(PrivateProfileSettingsPageActions.uploadAvatar, (state) => ({
    ...state,
    isLoading: true
  })),
  on(PrivateProfileSettingsPageActions.uploadAvatarSuccess,
    PrivateProfileSettingsPageActions.uploadAvatarFailure, (state) => ({
    ...state,
    isLoading: false
  })),
);

export const privateProfileSettingsPageReducer = (
  state: PrivateProfileSettingsPageState | undefined,
  action: Action
): PrivateProfileSettingsPageState => reducer(state, action);
