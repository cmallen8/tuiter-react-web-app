import {createAsyncThunk} from "@reduxjs/toolkit";
import * as watchedService from "./watched-service"

export const userWatchedShowThunk = createAsyncThunk(
    "users/watched", async (watched) => {
        const response = await watchedService.userWatchedShow(watched);
        return response;
    }
);