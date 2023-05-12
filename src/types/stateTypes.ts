import { AuthActionTypes, ProductActionTypes } from '../types/actionTypes';

export interface User {
  username: string;
  password: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface ProductListState {
  productList: Product[];
  loading: boolean;
  error: string | null;
}

export interface AppState {
  auth111: AuthState;
  productList: ProductListState;
}

export interface LoginRequestAction {
  type: typeof AuthActionTypes.LOGIN_REQUEST;
  payload: User;
}

export interface LoginSuccessAction {
  type: typeof AuthActionTypes.LOGIN_SUCCESS;
  payload: string;
}

export interface LoginFailureAction {
  type: typeof AuthActionTypes.LOGIN_FAILURE;
  payload: string;
}

export interface GetProductListRequestAction {
  type: typeof ProductActionTypes.GET_PRODUCT_LIST_REQUEST;
}

export interface GetProductListSuccessAction {
  type: typeof ProductActionTypes.GET_PRODUCT_LIST_SUCCESS;
  payload: Product[];
}

export interface GetProductListFailureAction {
  type: typeof ProductActionTypes.GET_PRODUCT_LIST_FAILURE;
  payload: string;
}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
export type ProductListAction =
  | GetProductListRequestAction
  | GetProductListSuccessAction
  | GetProductListFailureAction;
