import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ProductActionTypes } from '../../types/actionTypes';
import {
  getProductListSuccess,
  getProductListFailure,
} from '../actions/productActions';
import { ProductService } from '../../services/productService';

function* getProductList(action: any): Generator<any, void, any> {
  try {
    const response = yield call(ProductService.getAllProducts); // API'den liste verisini çekme
    yield put(getProductListSuccess(response)); // Başarılı yanıtta liste verisini redux store'a gönderme
  } catch (error: any) {
    yield put(getProductListFailure(error.message)); // Hata durumunda hata mesajını redux store'a gönderme
  }
}

function* watchProductListRequest() {
  yield takeLatest(ProductActionTypes.GET_PRODUCT_LIST_REQUEST, getProductList); // FETCH_LIST_REQUEST eylemini dinleme
}

export default function* listSaga() {
  yield all([
    watchProductListRequest(), // fetchListRequest eylemini izleme
  ]);
}
