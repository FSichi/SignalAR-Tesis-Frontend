import axios from "axios";

export const AppAPI = (token) => {

    return axios.create({
        baseURL: `${process.env.VITE_API_URL}/`,
        headers: {
            "Content-Type": "application/json",
            "Accept": '*/*',
            "x-token": token
        }
    });
};