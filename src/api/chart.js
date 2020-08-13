import axios from "axios";
import {apiUrl} from "./common";

export const getReports = async () => {
    const id = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/reports /${id}`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject();
        });
    });
};
