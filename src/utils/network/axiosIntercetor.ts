import axios from 'axios';
import { NetworkManager } from './networkManager';
import { Alert } from 'react-native';
import { StorageService } from '../storage';
import { ApiConstant } from '../../constants/apiConstant';


const instance = axios.create({
    baseURL: ApiConstant.baseUrl
});

instance.interceptors.request.use(
    async (config) => {
        config.headers.Accept = 'application/json';
        config.headers['Content-Type'] = 'application/json';
        const token = StorageService.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            let refreshToken = StorageService.getItem('refreshToken')
                .then((res) => {
                    return res;
                });


            var body = {
                "refreshToken": refreshToken
            }
            //@ts-ignore
            const newToken = await NetworkManager.postRequest(ApiConstant.refreshToken, body)
                //@ts-ignore
                .then(response => {
                    console.log("newToken response 111111111111 ::::::::::::::::::::::::::: ", response);
                })
                //@ts-ignore
                .catch(err => {
                    console.log("REQUEST ERR ::::", err);
                });


            console.log("newToken axiosIntercetor ::::::::::::::::::::::::::: ", newToken);
            //@ts-ignore
            if (newToken) {
                await StorageService.setItem('accessToken', newToken);
                return instance(originalRequest);
            } else {
                // Yenileme işlemi başarısız olduysa, kullanıcıyı çıkış yapmaya yönlendirebilirsiniz
                await StorageService.clearAll();
                // Örneğin, kullanıcının oturumunu sonlandırmak için bir yönlendirme yapabilirsiniz
                /* this.props.navigation.navigate('Login'); */
            }
        }

        return Promise.reject(error);
    }
);

export default instance;