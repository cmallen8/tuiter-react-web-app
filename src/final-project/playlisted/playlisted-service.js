import axios from "axios";

const PLAYLISTED_API = "http://localhost:4000/api/playlisted";
const USERS_URL = "http://localhost:4000/api/users";

export const userPlaylistedShow = async (userId, showId) => {
    const response = await axios.post(
        `${USERS_URL}/${userId}/playlisted/${showId}`
    );
    return response.data;
};

export const findPlaylistedShowByUserId = async (userId) => {
    const response = await axios.get(`${USERS_URL}/${userId}/playlisted`);
    return response.data;
};

export const findUserIdByPlaylistsId = async (showId) => {
    const response = await axios.get(`${PLAYLISTED_API}/${showId}/playlisted`);
    return response.data;
};