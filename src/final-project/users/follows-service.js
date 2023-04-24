import axios from "axios";

const USERS_URL = "http://localhost:4000/api/users";

export const userFollowsUser = async (followerId, followedId) => {
    const response = await axios.post(
        `${USERS_URL}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const userUnfollowsUser = async (followerId, followedId) => {
    const response = await axios.delete(
        `${USERS_URL}/${followerId}/follows/${followedId}`
    );
    return response.data;
};

export const findFollowsByFollowedId = async (followed) => {
    const response = await axios.get(`${USERS_URL}/${followed}/followers`);
    return response.data;
};

export const findFollowsByFollowerId = async (follower) => {
    const response = await axios.get(`${USERS_URL}/${follower}/followees`);
    return response.data;
};