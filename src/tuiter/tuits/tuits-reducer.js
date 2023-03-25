import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-logo.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        likeTuit(state, action) {
            const index = state.findIndex(tuit =>
                tuit._id === action.payload);
            state[index].liked = true;
            state[index].likes += 1;
        },
        unlikeTuit(state, action) {
            const index = state.findIndex(tuit =>
                tuit._id === action.payload);
            state[index].liked = false;
            state[index].likes -= 1;
        },
    }
});

// export reducer function
export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;