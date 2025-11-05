import axios from 'axios';

export const authApi = axios.create({
    baseURL: `${process.env.VITE_API_URL}/auth`,
});

export const AuthValidationAPI = (token) => {
    return axios.create({
        baseURL: `${process.env.VITE_API_URL}/auth`,
        headers: {
            "Content-Type": "application/json",
            "Accept": '*/*',
            "x-token": token
        }
    });
};