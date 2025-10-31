import axios from "axios";

export const AppAPI = (token) => {

    return axios.create({
        baseURL: 'https://signalar-backend-test.vercel.app/api/',
        headers: {
            "Content-Type": "application/json",
            "Accept": '*/*',
            "x-token": token
        }
    });
};