import axios from "axios";
import {apiUrl} from "./common";

export const getPatient = async () => {
    const id = localStorage.getItem("auth-token");
    console.log(id);
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/patients?filterItem=userId&filterValue=${id}`).then(res => {
            return resolve(res.data.data[0]);
        }).catch(err => {
            return reject();
        });
    });
};
