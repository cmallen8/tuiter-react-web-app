import { createSlice } from "@reduxjs/toolkit";
import {createUserThunk, updateUserThunk, deleteUserThunk, findUsersThunk, findUserByIdThunk, loginThunk, logoutThunk, registerThunk, profileThunk} from "./users-thunk";

/*const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
};*/

const usersSlice = createSlice({
    name: "users",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [createUserThunk.fulfilled]: (state, action) => {
            state.users.push(action.payload);
        },
        // double check this
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.filter((user) => user._id !== action.payload);
        },
        [findUsersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        [loginThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
    },
});

export default usersSlice.reducer;