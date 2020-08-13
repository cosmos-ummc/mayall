import axios from "axios";
import {apiUrl} from "./common";
import {getPatient} from "./patient";

export const getHasMeeting = async () => {
    const id = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/users/${id}`).then(res => {
            return resolve(res.data.data.invitedToMeeting);
        }).catch(err => {
            return reject();
        });
    });
};

export const getCannotDeny = async () => {
    const patient = await getPatient();
    return new Promise((resolve, reject) => {
        return resolve(patient.type === "1" || patient.type === "2");
    });
};

export const createMeeting = async (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${apiUrl}/client/meetings/${localStorage.getItem("auth-token")}`, {
            data: data,
        }).then(res => {
            return resolve();
        }).catch(err => {
            return reject();
        });
    });
};

export const getMeetings = async (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/meetings?item=time&order=DESC&filterItem=patientId&filterValue=${id}`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject();
        });
    });
};
