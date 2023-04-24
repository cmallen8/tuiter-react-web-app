import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
const USERS_URL = `${SERVER_API_URL}/users`;
//const USERS_URL = "http://localhost:4000/api/users";

// this makes axios participate in cookies
const api = axios.create({ withCredentials: true });

// send post to url
export const createUser = (newUser) => {
    return axios.post(USERS_URL, newUser);
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/update/${user._id}`, user);
    return response.data;
};


export const deleteUser = (_id) => {
    return axios.delete(`${USERS_URL}/${_id}`);
};
export const findUsers = async () => {
    const response = await axios.get(USERS_URL);
    return response.data;
};

export const findUserById = async (_id) => {
    const response = await axios.get(`${USERS_URL}/userId/${_id}`);
    return response.data;
};

export const register = async ({ username, password, firstName, lastName, email, userType }) => {
    const response = await api.post(`${USERS_URL}/register`, {
        username,
        password,
        firstName,
        lastName,
        email,
        userType
    });
    const user = response.data;
    return user;
}
export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    return user;
};

/*
export const login = (user) => {
    return api.post(`${USERS_URL}/login`, user);
};*/

export const profile = async () => {
    const response = await api.get(`${USERS_URL}/profile`);
    return response.data;
};


export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};






