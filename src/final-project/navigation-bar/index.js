import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationBar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

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
        <Link to="/final-project/signup" className={`list-group-item
                ${active === 'signup'?'active':''}`}>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                    <i className="bi bi-box-arrow-in-right"></i>
                </div>
                <div className="col-xxl-10 col-xl-10 d-none d-xl-block">
                    Signup
                </div>
            </div>
        </Link>
        </div>
    );
};
export default NavigationBar;