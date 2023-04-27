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

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {id} = useParams();
    const [profile, setProfile] = useState(currentUser);
    const [playlistedByUserId, setplaylistedByUserId] = useState([]);
    const [watchedByUserId, setWatchedByUserId] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchWatchedByUserId = async () => {
        const response = await findWatchesByUserId(currentUser._id);
        setWatchedByUserId(response);
    }
    const fetchPlaylistedShowByUserId = async () => {
        const response = await findPlaylistedShowByUserId(currentUser._id);
        setplaylistedByUserId(response);
    }

    useEffect(() => {
        fetchWatchedByUserId();
        fetchPlaylistedShowByUserId();

        //fetchDetails();

    }, []);



    return(


            <div>
                {currentUser && (
                <div>
                <div className="border-secondary col-12">

                        <div className="col-12 bg-light shadow mb-5 p-3 border border-1 border-primary rounded-2">
                            <div className="row">

                                <div className="col-11 mb-2 ">
                                    <span className="fw-bold h4 text-secondary">Welcome, {currentUser.firstName}!</span><br/>
                                </div>
                            </div>
                            <div className="row">

                                <img className="border-0" src="../images/tv-banner.jpg"/>
                                <div className=" text-right">
                                    <Link to="./edit-profile">
                                        <button className="btn btn-primary float-end mt-2">Edit Profile</button>
                                    </Link>
                                </div>
                                <span className="fw-bold h6 text-secondary"><i className="bi bi-person-square"></i> Full Name: <span className="fw-light"> {currentUser.firstName} {currentUser.lastName}</span></span><br/>
                                <span className="fw-bold h6 text-secondary"><i className="bi bi-envelope"></i> Email Address:

                                <span className="text-secondary fw-light"> {currentUser.email}&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                <span className="fw-bold h6 text-secondary"><i className="bi bi-patch-question"></i> User Type: <span className="fw-light"> {currentUser.userType}</span>  </span>


                            </div>
                            <div className="text-secondary fw-bold mt-3"><h4>You have watched: <br/></h4>
                            <div className="container-fluid">
                                <div className="row">
                                    {watchedByUserId && watchedByUserId.map((watchedByUserId) => (
                                        <div className="col" key={watchedByUserId.id}>
                                            <div className="mt-2">
                                                <div className="">
                                                    <img className="wd-width-lists" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${watchedByUserId.poster_path}`} alt={`${watchedByUserId.showName}`} />
                                                    <div className="">
                                                        <span className="text-secondary">{watchedByUserId.showName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            </div>
                            <div className="text-secondary fw-bold mt-3"><h4>On your list to play: <br/></h4>
                                <div className="container-fluid">
                                    <div className="row">
                                        {playlistedByUserId && playlistedByUserId.map((playlistedByUserId) => (
                                            <div className="col" key={playlistedByUserId.id}>
                                                <div className="mt-2">
                                                    <div className="">
                                                        <img className="wd-width-lists" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${playlistedByUserId.poster_path}`} alt={`${playlistedByUserId.showName}`} />
                                                        <div className="">
                                                            <span className="text-secondary">{playlistedByUserId.showName}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                </div>
            </div>

                    </div>)}
            </div>



    );
}
export default ProfileComponent;