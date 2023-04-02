import axios from 'axios';
// const TUITS_API = 'http://localhost:4000/api/tuits';
//const TUITS_API = 'https://tuiter-node-server-app-wi8d.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    console.log(tuit)
    const newTuit = {    "userName": "NASA",
        "handle": "@nasa",
        "image": "nasa-logo.png",
        "time": "1 min",
    tuit:tuit.tuit}
    const response = await axios.post(TUITS_API, newTuit)
    return response.data;
}

// async tags this function as asynchronous
export const findTuits = async () => {
    // send HTTP GET request to TUITS_API
    const response = await axios.get(TUITS_API);
    // extract JSON array from response from server
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    // send HTTP DELETE request to server
    // append tuit's ID to URL
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    // data contains response's status we'll ignore
    // for now
    return response.data
}
// service function accepts tuit to send server
// send HTTP PUT request appending tuit's ID
// to URL, and embed tuit object in BODY
// return tuit update to update in reducer's
// state's store
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;

}