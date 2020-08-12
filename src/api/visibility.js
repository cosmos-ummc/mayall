import axios from "axios";
import {apiUrl} from "./common";

export const setVisibility = async (visible) => {
    const id = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.put(`${apiUrl}/client/users/visibility`, {
            id: id, visible: visible,
        }).then(res => {
            return resolve();
        }).catch(err => {
            return reject();
        });
    });
};

export const getVisibility = async () => {
    const id = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/users/${id}`).then(res => {
            return resolve(res.data.data.visible);
        }).catch(err => {
            return reject();
        });
    });
};
