import axios from "axios";
import {apiUrl} from "./common";

export const getRecommendedFeeds = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/client/feeds/1`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject(err);
        });
    });
};

export const getSpecialFeeds = async () => {
    const userId = localStorage.getItem("auth-token");
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/client/feeds/${userId}`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject(err);
        });
    });
};

export const getMeditations = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/client/meditations/1`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject(err);
        });
    });
};

export const getGames = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${apiUrl}/client/games/1`).then(res => {
            return resolve(res.data.data);
        }).catch(err => {
            return reject(err);
        });
    });
};
