import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {updateUserThunk, profileThunk, logoutThunk} from "../users/users-thunk";
import {Link} from "react-router-dom";
import {findUserById} from "../users/users-service";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {userID} = useParams();
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <>
            <div>
                <div className="border-secondary col-12">
                    {
                        <div className="col-12">
                            <div className="row">

                                <div className="col-11 mb-2">
                                    <span className="fw-bold h6">Welcome, {currentUser.firstName}!</span><br/>
                                </div>
                            </div>
                            <div className="row">

                                <img className="border-0" src="../images/tv-banner.jpg"/>
                                <div className=" text-right">
                                    <Link to="./edit-profile">
                                        <button className="btn btn-primary float-end mt-2">Edit Profile</button>
                                    </Link>
                                </div>
                                <span className="fw-bold h6 text-secondary">Full Name: <span className="fw-light"> {currentUser.firstName} {currentUser.lastName}</span></span><br/>
                                <span className="fw-bold h6 text-secondary">Email Address: <span className="fw-light"> {currentUser.username}</span>  </span>

                                <span className="text-secondary"><i className="bi bi-envelope"></i> {currentUser.email}&nbsp;&nbsp;&nbsp;&nbsp;</span>

                            </div>
                        </div>

                    }
                </div>
            </div>


        </>

    );
}
export default Profile;


import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {updateUserThunk, profileThunk, logoutThunk} from "../users/users-thunk";
import {Link} from "react-router-dom";
import {findUserById} from "../users/users-service";

const ProfileComponents = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {userID} = useParams();
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    useEffect( () => {
        const {payload} = dispatch(profileThunk());
        setProfile(payload);
    }, []);
    return(
        <>
            <div>
                <h1>profile screen</h1>

                <div className="border-secondary col-12">
                    { currentUser &&
                        <div className="col-12">
                            <div className="row">

                                <div className="col-11 mb-2">
                                    <span className="fw-bold h6">Welcome, {currentUser.firstName}!</span><br/>
                                </div>
                            </div>
                            <div className="row">

                                <img className="border-0" src="../images/tv-banner.jpg"/>






                                <span className="text-secondary"><i className="bi bi-envelope"></i> {currentUser.email}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <button onClick={save}>Save</button>
                            </div>
                        </div>

                    }
                </div>
            </div>


        </>

    );
}
export default ProfileComponents;







import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {profileThunk, updateUserThunk} from "../users/users-thunk"
import { useNavigate, useParams } from "react-router";
import {findWatchesByUserId} from "../watched/watched-service"
import {findPlaylistedShowByUserId} from "../playlisted/playlisted-service";
import { findUserById } from "../users/users-service"
import {userFollowsUser, findFollowsByFollowerId,findFollowsByFollowedId,} from "../users/follows-service"
import { Link } from "react-router-dom";


function ProfileC() {
    const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
    const { userId } = useParams();
    const { currentUser } = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const [watches, setWatched] = useState([]);
    const [playlists, setPlaylisted] = useState([]);
    const [following, setFollowing] = useState([]);
    const [follows, setFollows] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchFollowing = async () => {
        const following = await findFollowsByFollowerId(profile._id);
        setFollowing(following);
    };
    const fetchFollowers = async () => {
        const follows = await findFollowsByFollowedId(profile._id);
        setFollows(follows);
    };
    const fetchWatches = async () => {
        const watches = await findWatchesByUserId(profile._id);
        setWatched(watches);
    };
    const fetchPlaylists = async () => {
        const playlists = await findPlaylistedShowByUserId(profile._id);
        setPlaylisted(playlists)
    };
    const fetchProfile = async () => {
        if (userId) {
            const user = await findUserById(userId);
            setProfile(user);
            return;
        }
        const response = await dispatch(profileThunk());
        setProfile(response.payload);
    };
    const loadScreen = async () => {
        await fetchProfile();
        await fetchWatches();
        await fetchFollowing();
        await fetchFollowers();
    };
    const followUser = async () => {
        await userFollowsUser(currentUser._id, profile._id);
    };
    const updateProfile = async () => {
        await dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        loadScreen();
    }, [userId]);
    return (
        <div>
            <div>
                {currentUser && (
                    <div>
                        <h2>{currentUser.username}</h2>
                        <h2>{currentUser.password}</h2>
                    </div>
                )}
            </div>
            <h1>
                <button onClick={followUser} className="btn btn-primary float-end">
                    Follow
                </button>
                Profile {typeof userId !== undefined ? "me" : userId}
            </h1>

            {profile && (
                <div>
                    <h2>Profile</h2>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            readOnly={true}
                            className="form-control"
                            value={profile.username}
                            onChange={(e) => {
                                setProfile({ ...profile, username: e.target.value });
                            }}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            readOnly={typeof userId !== undefined}
                            className="form-control"
                            value={profile.password}
                            onChange={(e) => {
                                setProfile({ ...profile, password: e.target.value });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={profile.firstName}
                            onChange={(e) => {
                                setProfile({ ...profile, firstName: e.target.value });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={profile.lastName}
                            onChange={(e) => {
                                setProfile({ ...profile, lastName: e.target.value });
                            }}
                        />
                    </div>
                    <button onClick={updateProfile} className="btn btn-success">
                        Update
                    </button>

                    <div>
                        <h3>{profile.username}</h3>
                        <h3>{profile._id}</h3>
                    </div>
                </div>
            )}

            {!follows && (
                <div>
                    <h2>Followers</h2>
                    <ul className="list-group">
                        {follows.map((follow) => (
                            <li className="list-group-item">
                                <Link to={`/profile/${follow.follower._id}`}>
                                    <h3>{follow.follower.username}</h3>
                                    <h3>{follow.follower._id}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {!following && (
                <div>
                    <h2>Following</h2>
                    <ul className="list-group">
                        {following.map((follow) => (
                            <li className="list-group-item">
                                <Link to={`/profile/${follow.followed._id}`}>
                                    <h3>{follow.followed.username}</h3>
                                    <h3>{follow.followed._id}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div>

                {profile && (
                    <div>
                        <h2>
                            Welcome {profile.username} {profile._id}
                        </h2>
                    </div>
                )}
            </div>

            <div>
                <h2>Watches</h2>
                <ul className="list-group">
                    {watches.map((watch) => (
                        <li className="list-group-item">

                            {watch.showId}
                            <img
                                src={`https://api.themoviedb.org/3/tv/${watch.showId}/images?api_key=${TMDB_KEY}`}
                            />

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfileC;