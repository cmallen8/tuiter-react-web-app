import axios from "axios";

const WATCHED_API = "http://localhost:4000/api/watched";
const USERS_URL = "http://localhost:4000/api/users";

export const userWatchedShow = async (userId, showId) => {
    const response = await axios.post(
        `${USERS_URL}/${userId}/watched/${showId}`
    );
    return response.data;
};

export const userUnWatchedShow = async (userId, showId) => {
    const response = await axios.delete(
        `${USERS_URL}/${userId}/watched/${showId}`
    );
    return response.data;
};

export const findWatchesByUserId = async (userId) => {
    const response = await axios.get(`${USERS_URL}/${userId}/watched`);
    return response.data;
};

export const findUserIdByWatchesId = async (showId) => {
    const response = await axios.get(`${WATCHED_API}/${showId}/watched`);
    return response.data;
};