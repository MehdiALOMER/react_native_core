import { ApiConstant } from '../constants/apiConstant';
import { Product } from '../types/stateTypes';
import { NetworkManager } from '../utils/network/networkManager';
import { StorageService } from '../utils/storage';
import { User } from '../utils/types';

export class ProductService {
  static async getAllProducts() {
    let response = await NetworkManager.getRequest(ApiConstant.getAllProducts);
    const productList: Product[] = response.data.products;
    return productList;
  }
}
