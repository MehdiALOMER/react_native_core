import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer,
});

export default rootReducer;
