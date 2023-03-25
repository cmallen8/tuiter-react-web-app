import { createSlice } from "@reduxjs/toolkit";
import profileArray from "./profile.json";

const currentUser = [
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
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}
];
const profileSlice = createSlice({
    name: "user",
    initialState: currentUser,
    reducers: {
        editProfile: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer