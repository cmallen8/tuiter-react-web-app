import React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateUserThunk} from "../users/users-thunk";
import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";

const EditProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {userID} = useParams();
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSaveButton = async () => {
        await dispatch(updateUserThunk(profile));
    };

    return(
        <>
            <div className="border-secondary col-12">
                {
                    <div className="col-12">
                        <div className="row mb-2">
                            <div className="col-1">
                                <Link to="/final-project/profile"><i className="bi bi-x-lg h6"></i></Link>
                            </div>
                            <div className="col-6">
                                <span className="fw-bold h6">Edit Profile</span>
                            </div>
                            <div className="col-5">
                                <Link to="/final-project/profile">
                                    <button onClick={handleSaveButton}
                                            className="btn btn-primary float-end mt-2">Save</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <img className="border-0" src="../../images/tv-banner.jpg"/>
                        </div>
                        <div className="row mt-5">
                            <input
                                type="text"
                                value={profile.firstName}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        firstName: e.target.value,
                                    })
                                }
                                className="form-control mt-2 location"/><span
                            className=""></span>
                            <input
                                type="text"
                                value={profile.lastName}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        lastName: e.target.value,
                                    })
                                }
                                className="form-control mt-2 website"/><span
                            className=""></span>

                            <input
                                type="test"
                                value={profile.email}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        email: e.target.value,
                                    })
                                }
                                className="form-control mt-2"/><span
                            className=""></span>

                        </div>
                    </div>
                }
            </div>
        </>
    );
};
export default EditProfile;