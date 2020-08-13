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
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/chatmessages?item=timestamp&order=ASC&filterItem=roomId&filterValue=${roomId}`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject(err);
        });
    });
};

export const createMessage = async (message) => {
    return new Promise((resolve, reject) => {
        axios.post(`${apiUrl}/chatmessages/0`, {
            data: message,
        }).then(res => {
            return resolve();
        }).catch(err => {
            return reject();
        });
    });
};

export const block = async (idsToBlock) => {
    return new Promise((resolve, reject) => {
        axios.post(`${apiUrl}/client/block`, {
            id: idsToBlock[0],
            targetId: idsToBlock[1],
        }).then(res => {
            return resolve();
        }).catch(err => {
            return reject();
        });
    });
};

export const findMatch = async () => {
    const id = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.post(`${apiUrl}/client/newmatch`, {
            id: id,
        }).then(res => {
            return resolve(res.data.user, res.data.chatRoom);
        }).catch(err => {
            return reject();
        });
    });
};
