import React from "react";
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {logoutThunk} from "../users/users-thunk";
import {useParams} from "react-router-dom";

const NavigationBar = () => {
    const {currentUser} = useSelector((state) => state.users);
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className="list-group">
            <Link to="/final-project/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                        <i className="bi bi-house-fill"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/final-project/search" className={`list-group-item
                    ${active === 'search'?'active':''}`}>
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                        <i className="bi bi-binoculars-fill"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                            Search
                    </div>
                </div>
            </Link>
            {!currentUser &&  (
            <>
            <Link to="/final-project/login" className={`list-group-item
                    ${active === 'login'?'active':''}`}>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                    <i className="bi bi-door-open-fill"></i>
                </div>
                <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                    Login
                </div>
            </div>
        </Link>
        <Link to="/final-project/register" className={`list-group-item
                ${active === 'register'?'active':''}`}>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                    <i className="bi bi-pencil-square"></i>
                </div>
                <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                    Signup
                </div>
            </div>
        </Link>
            </>
            )}
            {currentUser && (
            <>
            <Link to="/final-project/profile" className={`list-group-item
            ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                        <i className="bi bi-person-square"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                        Profile
                    </div>
                </div>
            </Link>

                {currentUser.isAdmin && (
                    <>
                        <Link to="/final-project/admin" className={`list-group-item
            ${active === 'admin'?'active':''}`}>
                            <div className="row">
                                <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                                    <i className="bi bi-incognito"></i>
                                </div>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                                    Admin
                                </div>
                            </div>
                        </Link>
                    </>
                )}


                <div className={`list-group-item
            ${active === 'logout'?'active':''}`} onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/final-project/home")}
                    }>
                    <div className="row">
                        <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                            <i className="bi bi-box-arrow-in-left"></i>
                        </div>
                        <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                            Logout
                        </div>
                    </div>
                </div>

            </>)}
        </div>
    );
};
export default NavigationBar;