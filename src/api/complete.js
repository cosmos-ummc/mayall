import axios from "axios";
import {apiUrl} from "./common";

export const getCompleted = async () => {
    const id = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/client/users/completed?id=${id}`).then(res => {
            return resolve(res.data.completed);
        }).catch(err => {
            return reject();
        });
    });
};
