import { AuthActionTypes, AuthState, AuthAction } from '../utils/types';

const initialState: AuthState = {
    user: null,
    token: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_USER:
            return { ...state, user: action.payload };
        case AuthActionTypes.SET_TOKEN:
            return {
                ...state, token: action.payload
            };
        case AuthActionTypes.REMOVE_USER:
            return { ...state, user: null };
        case AuthActionTypes.REMOVE_TOKEN:
            return { ...state, token: null };
        default:
            return state;
    }
};

export default authReducer;