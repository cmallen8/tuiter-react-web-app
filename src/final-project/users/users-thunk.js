import { createAsyncThunk } from "@reduxjs/toolkit";
import * as usersService from "./users-service"

export const createUserThunk = createAsyncThunk(
    "users/create",
    async (user) => {
        const response = await usersService.createUser(user);
        return response.data;
    }
);

export const updateUserThunk = createAsyncThunk(
    "users/update",
    async (user) => {
        await usersService.updateUser(user);
        return user;
    }
);

export const deleteUserThunk = createAsyncThunk(
    "users/delete", async (_id) => {
    await usersService.deleteUser(_id);
    return _id;
});

export const findUsersThunk = createAsyncThunk(
    "users/find",
    async () => {
    const users = await usersService.findUsers();
    return users;
});

export const findUserByIdThunk = createAsyncThunk(
    "users/findById",
    async (_id) => {
        const response = await usersService.findUserById(_id);
        return response.data;
    }
);

export const loginThunk = createAsyncThunk(
    "users/login", async (user) => {
        const response = await usersService.login(user);
        return response;
    }
);

export const logoutThunk = createAsyncThunk("users/logout",
    async () => {
    return await usersService.logout();
});

export const registerThunk = createAsyncThunk(
    "users/register",
    async (user) => {
        const response = await usersService.register(user);
        return response.data;
    }
);

export const profileThunk = createAsyncThunk(
    "users/profile", async () => {
    const response = await usersService.profile();
    return response.data;
});
