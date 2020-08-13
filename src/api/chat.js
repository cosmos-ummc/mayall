import axios from "axios";
import {apiUrl} from "./common";

export const getChatRooms = async () => {
    const id = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/client/chatrooms?id=${id}`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject(err);
        });
    });
};

export const getMessages = async (roomId) => {
    // return new Promise((resolve, reject) => {
    //     axios.get(`${apiUrl}/messages?id=${id}`).then(res => {
    //         return resolve(res.data.data);
    //     }).catch(err => {
    //         return reject(err);
    //     });
    // });
};
