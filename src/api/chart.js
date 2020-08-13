import axios from "axios";
import {apiUrl} from "./common";

export const getReports = async (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/reports/${id}`).then(res => {
            console.log(res.data);
            return resolve(res.data.data);
        }).catch(err => {
            return reject();
        });
    });
};
