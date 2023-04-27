import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {updateUserThunk, profileThunk, logoutThunk} from "../users/users-thunk";
import {Link} from "react-router-dom";
import {findUserById} from "../users/users-service";
import {getShowDetails} from "../streaming-content/streaming-service";
import {findWatchesByUserId} from "../watched/watched-service";
import {findPlaylistedShowByUserId} from "../playlisted/playlisted-service";
import * as userService from "../users/users-service";

const ProfileViewComponent = () => {
    //const {viewUser} = useSelector((state) => state.users)
    const {id} = useParams();
    const [viewUser, setViewUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUsers = async () => {
        const viewUser = await userService.findUserById(id);
        setViewUser(viewUser);
    };

    useEffect(() => {
        getUsers();
    }, []);



    return(


        <div>
            {viewUser && (
                <div>
                    <div className="border-secondary col-12">

                        <div className="col-12 bg-light shadow mb-5 p-3 border border-1 border-primary rounded-2">

                            <div className="row">

                                <img className="border-0" src="../images/tv-banner.jpg"/>
                                <div className=" text-right">
                                    <Link to="./edit-profile">
                                        <button className="btn btn-primary float-end mt-2">Edit Profile</button>
                                    </Link>
                                </div>
                                <span className="fw-bold h6 text-secondary"><i className="bi bi-person-square"></i> Full Name: <span className="fw-light"> {viewUser.firstName} {viewUser.lastName}</span></span><br/>
                                <span className="fw-bold h6 text-secondary"><i className="bi bi-envelope"></i> Email Address:

                                <span className="text-secondary fw-light"> {viewUser.email}&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                <span className="fw-bold h6 text-secondary"><i className="bi bi-patch-question"></i> User Type: <span className="fw-light"> {viewUser.userType}</span>  </span>


                            </div>

                        </div>
                    </div>

                </div>)}
        </div>



    );
}
export default ProfileViewComponent;