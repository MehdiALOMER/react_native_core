import { ApiConstant } from "../constants/apiConstant";
import { NetworkManager } from "../utils/network/networkManager";
import { StorageService } from "../utils/storage";
import { User } from "../types/stateTypes";

export class AuthService {
    static async getUserProfile() {
        let response = await NetworkManager.getRequest(ApiConstant.profile);
        return response.data;
    }

    static async login(user: User) {
        // @ts-ignore
        let response = await NetworkManager.postRequest(ApiConstant.login, user); // API'den gelen veriyi local storage'a kaydetme
        StorageService.setItem('token', response.data.token);
        return response.data.token;
    }

    static async logout() {
        await StorageService.clearAll();
    }
}