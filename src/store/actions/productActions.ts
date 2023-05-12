import { ProductActionTypes } from '../../types/actionTypes';
import { Product } from '../../types/stateTypes';

export const getProductListRequest = () => ({
  type: ProductActionTypes.GET_PRODUCT_LIST_REQUEST,
});

export const getProductListSuccess = (productList: Product[]) => ({
  type: ProductActionTypes.GET_PRODUCT_LIST_SUCCESS,
  payload: productList,
});

export const getProductListFailure = (error: string) => ({
  type: ProductActionTypes.GET_PRODUCT_LIST_FAILURE,
  payload: error,
});
