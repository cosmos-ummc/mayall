import axios from 'axios';
import {apiUrl} from "./common";

export const login = async (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(`${apiUrl}/login`, {
            email, password
        }).then(res => {
            console.log(res);
            console.log(res.data);
            localStorage.setItem("displayName", res.data.displayName);
            localStorage.setItem("auth-token", res.data.id);
            return resolve();
        }).catch(err => {
            alert("Invalid email or password, please try again.");
            return reject();
        });
    });
};

export const logout = async () => {
    return new Promise((resolve) => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("displayName");
        return resolve();
    });
};
