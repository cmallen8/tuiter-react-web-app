import React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import '../profile/index.css';
import {useDispatch} from "react-redux";
import {updateUser} from "../profile/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const {user} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    };

    return(
        <>

            <div className="border-secondary col-12">

                {

                    <div className="col-12">
                        <div className="row mb-2">
                            <div className="col-1">
                                <Link to="../profile"><i className="bi bi-x-lg h6"></i></Link>
                            </div>
                            <div className="col-6">
                                <span className="fw-bold h6">Edit Profile</span>
                            </div>
                            <div className="col-5">
                                <Link to="/tuiter/profile">
                                    <button onClick={handleSaveButton}
                                            className="btn rounded-pill border-secondary bg-dark border-0 text-white button-location float-end mt-2">Save</button>
                                </Link>
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
                                value={profile.firstName}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        firstName: e.target.value,
                                    })
                                }
                                className="form-control mt-2 firstname"/>
                            <input
                                placeholder="Name"
                                type="text"
                                value={profile.lastName}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        lastName: e.target.value,
                                    })
                                }
                                className="form-control mt-2 lastname"/>

                            <textarea
                                type="text"
                                value={profile.bio}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        bio: e.target.value,
                                    })
                                }
                                className="form-control mt-2 bio"/>
                            <input
                                type="text"
                                value={profile.pLocation}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        pLocation: e.target.value,
                                    })
                                }
                                className="form-control mt-2 location"/><span
                            className=""></span>
                            <input
                                type="text"
                                value={profile.website}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        website: e.target.value,
                                    })
                                }
                                className="form-control mt-2 website"/><span
                            className=""></span>

                            <input
                                type="date"
                                value={profile.dateOfBirth}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        dateOfBirth: e.target.value,
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