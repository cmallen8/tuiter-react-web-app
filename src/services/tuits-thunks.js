import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service"
import tuitStats from "../tuiter/tuits/tuit-stats";

// create thunk for findTuits
// give unique name, thunk invokes
// service function. Returned data goes in
// redux action's payload
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

// unique thunk identifier
// wraps service method
// return tuit ID so we can remove tuit
// from reducer's store
export const deleteTuitsThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async  (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    }
)

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
)

// unique identifier
// accepts updated tuit
// sends updated tuit to server with service
// the functionality works on refresh
export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) => {
        const updatetuit = await service.updateTuit(tuit)
        return tuit;
    }
       // await service.updateTuit(tuit)
)