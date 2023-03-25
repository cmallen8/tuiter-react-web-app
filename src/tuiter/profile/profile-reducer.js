import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:
        {
            _id: "4321",
            firstName: 'Jose',
            lastName: 'Annunziato',
            pHandle: '@jannunzi',
            profilePicture: 'react-blue.jpg',
            bannerPicture: 'polyglot.jpg',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements.',
            website: 'youtube.com/webdevtv',
            pLocation: 'Boston, MA',
            dateOfBirth: '1968-07-07',
            dateJoined: ' April 2009',
            followingCount: 340,
            followersCount: 223,
        },
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;
export const {updateUser} = userSlice.actions;