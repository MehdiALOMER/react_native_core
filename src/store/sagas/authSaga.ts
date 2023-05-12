import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AuthActionTypes } from '../../types/actionTypes';
import { loginSuccess, loginFailure } from '../actions/authActions';
import { AuthService } from '../../services/authService';

function* login(action: any): Generator<any, void, any> {
  try {
    const response = yield call(AuthService.login, action.payload); // API'den liste verisini çekme

    yield put(loginSuccess(response.token));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

function* watchLoginRequest() {
  yield takeLatest(AuthActionTypes.LOGIN_REQUEST, login); // LOGIN_REQUEST eylemini dinleme
}

export default function* authSaga() {
  yield all([
    watchLoginRequest(), // loginRequest eylemini izleme
  ]);
}
