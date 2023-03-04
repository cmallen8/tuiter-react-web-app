import React from "react";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar"
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomePostList from "./home";
import {Routes, Route} from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Tuiter() {
    return(
        <div>
           <Nav/>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomePostList/>}/>
                        <Route index element={<ExploreComponent/>}/>
                    </Routes>

                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>

            </div>

        </div>
    );
}
export default Tuiter