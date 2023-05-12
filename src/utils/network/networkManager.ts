import instance from "./axiosIntercetor";


export class NetworkManager {
    static async getRequest(url = "", data = null) {
        // @ts-ignore
        return await instance.get(url, data);
    }
    static async postRequest(url = "", data = null) {
        return await instance.post(url, data);
    }
}

