import axios from 'axios';

export const authApi = axios.create({
    baseURL: 'https://signalar-backend-test.vercel.app/api/auth',
});

export const AuthValidationAPI = (token) => {
    return axios.create({
        baseURL: 'https://signalar-backend-test.vercel.app/api/auth',
        headers: {
            "Content-Type": "application/json",
            "Accept": '*/*',
            "x-token": token
        }
    });
};