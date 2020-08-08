import axios from 'axios';
import {authEnabled, apiUrl} from "./common";

export const login = async (email, password) => {
    if (authEnabled !== "true") {
        localStorage.setItem("auth-token", "DUMMY_USER");
        return;
    }
    axios.post(`${apiUrl}/login`, {
        email, password
    }).then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("displayName", res.data.displayName);
        localStorage.setItem("auth-token", res.data.id);
    });
};

export const logout = async () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("displayName");
};
