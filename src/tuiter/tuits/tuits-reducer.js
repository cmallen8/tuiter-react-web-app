import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {createTuitThunk, deleteTuitsThunk, findTuitsThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

// initial state has no tuits. loading flag to display spinner
const initialState = {
    tuits: [],
    loading: false
}

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
    // same as "initialState": initialState
    initialState,

    // define asynchronous reducers
    // if request is not yet fulfilled …
    extraReducers: {
        // define asynchronous reducers
        // if request is not yet fulfilled
        // set loading true so UI can display spinner
        // empty tuits since we are still fetching them
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },

        // handle successful response
        // server response successful
        // payload from action contains tuit ID to remove
        // turn off loading flag
        // filter out tuit whose ID matches tuit to remove
        // we're ignoring pending and rejected thunks
        [deleteTuitsThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },

        // when server responds
        // payload contains new tuit
        // clear loading flag
        // append new tuit to tuits array
        // we're ignoring pending and rejected thunks
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        // when we get response, request is fulfilled
        // we extract/destruct payload from action object
        // turn off loading flag since we have the data
        // payload has tuits from server and update redux state
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },

        // if request times out, or responds with error
        // reset loading flag
        // report error
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },

    // when server update is done
    // payload contains updated tuit
    // clear loading flag
    // find index of updated tuit in array
    // merge old tuit with updated tuit
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            const tuitNdx = state.tuits
                .findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload
            }
        },

    // we're not going to use the old reducers anymore
    reducers: {}
});

// export reducer function
export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;