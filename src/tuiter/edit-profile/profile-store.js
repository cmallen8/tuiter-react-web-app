// this doesn't do anything - store is in index

import { configureStore }
    from '@reduxjs/toolkit';
import profileReducer from "../profile/profile-reducer";

const store = configureStore({
    reducer: {
        profile: profileReducer,
    },
});
export default store;
