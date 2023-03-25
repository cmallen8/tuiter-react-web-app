import React, {useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {editProfile} from "./profile-reducer";

const EditProfile = () => {
    let [profile, setProfile] =
    useState(state => state.profile);
    const dispatch = useDispatch();

    const editProfileHandler = () => {
        const editedProfile = {
            profile: profile
        }
        dispatch(editProfile(editedProfile));
    }
    return (
        <div className="row">
            <textarea value={profile} placeholder="What's happening?"
                      className="form-control border-0"
                      onChange={(event) => setProfile(event.target.value)}>
       </textarea>
        </div>
    )
}
export default EditProfile;