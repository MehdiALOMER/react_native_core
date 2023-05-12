import { AuthActionTypes } from '../../types/actionTypes';
import { AuthState, AuthAction } from '../../types/stateTypes';

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null,
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
