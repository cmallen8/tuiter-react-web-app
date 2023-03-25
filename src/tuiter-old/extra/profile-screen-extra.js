import React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import './index.css';
import {useDispatch} from "react-redux";
import profileScreen from "./profile-screen";
import {Link} from "react-router-dom";

const ProfileScreen = () => {
    const {profile} = useSelector((state) => state.profile);
    const [profileA, setProfileA] = useState(profile);
    const dispatch = useDispatch();

    return(
        <>

            <div className="border-secondary col-12">

                {
                    profile.map(profile =>
                        <div className="col-12">
                            <div className="row mb-2">
                                <div className="col-1">
                                    <i className="bi bi-x-lg h6"></i>
                                </div>
                                <div className="col-11">
                                    <span className="fw-bold h6">Edit Profile</span>
                                </div>
                            </div>
                            <div className="row">
                                <img className="border-0" src={`/images/${profile.bannerPicture}`}/>
                                <div className=" profile-location"> <img className="rounded-circle profile-pic" src={`/images/${profile.profilePicture}`}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <input
                                    type="text"
                                    value={profileA.firstName}
                                    onChange={(e) =>
                                        setProfileA({
                                            ...profileA,
                                            firstName: e.target.value,
                                        })
                                    }
                                    className="form-control mt-2 firstname"/>
                                <input
                                    placeholder="Name"
                                    type="text"
                                    value={profile.lastName}
                                    className="form-control mt-2 lastname"/>

                                <textarea
                                    type="text"
                                    value={profile.bio}
                                    className="form-control mt-2 bio"/>
                                <input
                                    type="text"
                                    value={profile.pLocation}
                                    className="form-control mt-2 location"/><span
                                className=""></span>
                                <input
                                    type="text"
                                    value={profile.website}
                                    className="form-control mt-2 location"/><span
                                className=""></span>

                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};
export default ProfileScreen;