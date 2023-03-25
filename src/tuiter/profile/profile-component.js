import React from "react";
import {useSelector} from "react-redux";
import './index.css';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import HomeComponent from "../home";
import ExploreComponent from "../explore";
import {useState} from "react";

const ProfileComponent = () => {
    const {user} = useSelector(state => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();

    return(
        <>
            <div className="border-secondary col-12">
                {
                        <div className="col-12">
                            <div className="row">
                                <div className="col-1 mt-2">
                                    <i className="bi bi-arrow-left h4 "></i>
                                </div>
                                <div className="col-11 mb-2">
                                    <span className="fw-bold h6">{profile.firstName} {profile.lastName}</span><br/>
                                    <span className="text-secondary small">6,114 Tuits</span>

                                </div>
                            </div>
                            <div className="row">

                                <img className="border-0" src={`/images/${profile.bannerPicture}`}/>
                                <div className=" profile-location"> <img className="rounded-circle profile-pic" src={`/images/${profile.profilePicture}`}/></div>
                                <div className=" text-right">
                                    <Link to="/tuiter/profile-screen">
                                        <button className="btn rounded-pill border-secondary button-location w-25 float-end mt-2">Edit Profile</button>
                                    </Link>
                                </div>
                                <span className="fw-bold h6">{profile.firstName} {profile.lastName}</span><br/>
                                <span className="text-secondary small line-height">{profile.pHandle} </span>

                                <span className="mt-4 mb-2">{profile.bio} </span>
                                <span className="text-secondary"><i className="bi bi-geo-alt"></i> {profile.pLocation}&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="bi bi-balloon"></i> Born {profile.dateOfBirth}&nbsp;&nbsp;&nbsp;&nbsp;<i
                                        className="bi bi-calendar3"></i> Joined {profile.dateJoined}</span>
                                <br/>
                                <span className="mt-2 text-dark fw-bold">{profile.followingCount} <span className="text-secondary fw-normal"> Following</span>&nbsp;&nbsp;&nbsp;&nbsp;{profile.followersCount} <span className="text-secondary fw-normal">Followers</span></span>


                            </div>
                        </div>

                }
            </div>
        </>
    );
};
export default ProfileComponent;