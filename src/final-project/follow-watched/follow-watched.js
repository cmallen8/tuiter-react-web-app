/*import axios from "axios";

const FOLLOW_API = "http://localhost:4000/api/follows";

export const userWatchedShow = async (userId, showId) => {
    const response = await axios.post(
        `${FOLLOW_API}/${userId}/show/${showId}`
    );
    return response.data;
};

export const userUnfollowsUser = async (userId, showId) => {
    const response = await axios.delete(
        `${FOLLOW_API}/follows/delete/${showId}`
    );
    return response.data;
};

export const findUserIdByWatchesId = async (showId) => {
    const response = await axios.get(`${FOLLOW_API}/userbywatches/${showId}`);
    return response.data;
};

export const findWatchesByUserId = async (userId) => {
    const response = await axios.get(`${FOLLOW_API}/watchesbyuid/${userId}`);
    return response.data;
};
*/
