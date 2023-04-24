import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {updateUserThunk, profileThunk, logoutThunk} from "../users/users-thunk";
import {Link} from "react-router-dom";
import {findUserById} from "../users/users-service";

const ProfileComponent = () => {
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
export default ProfileComponent;


