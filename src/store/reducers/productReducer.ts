import { ProductActionTypes } from '../../types/actionTypes';
import { ProductListState, ProductListAction } from '../../types/stateTypes';

const initialState: ProductListState = {
  productList: [],
  loading: false,
  error: null,
};

const listReducer = (
  state = initialState,
  action: ProductListAction,
): ProductListState => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ProductActionTypes.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false,
        error: null,
      };
    case ProductActionTypes.GET_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        productList: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
