import {createSlice} from "@reduxjs/toolkit";
import {userWatchedShowThunk} from "./watched-thunk";

const initialState = {
    watched: [],
    loading: false
}

/*
const currentWatched = {
    "userId": "0",
    "showId": "0",
};
*/

const watchedSlice = createSlice({
    name: "watched",
    initialState: {currentWatched: null},
    reducers: {},
    extraReducers: {
        [userWatchedShowThunk.fulfilled]: (state, {payload}) => {
            state.currentWatched = payload;
        },
    }
});

export default watchedSlice.reducer;