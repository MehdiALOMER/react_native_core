import { AuthActionTypes } from '../../types/actionTypes';
import { User } from '../../types/stateTypes';

export const loginRequest = (user: User) => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload: user,
});

export const loginSuccess = (token: string) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error: string) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: error,
});
