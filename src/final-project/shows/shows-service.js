import axios from "axios";

const SHOWS_API = "http:http://localhost:4000/api/shows";

export const createShow = async (show) => {
    const response = await axios.post(`&{SHOWS_API}`);
    return response.data;
};