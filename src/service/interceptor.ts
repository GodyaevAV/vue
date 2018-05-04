import axios from 'axios'

export default function Interceptor() {
    
    const requestInterceptor = axios.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
        return Promise.reject(err);
    });
    
    const responseInterceptor = axios.interceptors.response.use(response => {
        return response;
    }, err => {
        return Promise.reject(err);
    });

    axios.interceptors.request.eject(requestInterceptor);
    axios.interceptors.response.eject(responseInterceptor);
}