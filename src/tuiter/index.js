import React from "react";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar"
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ProfileComponent from "./profile/profile-component";
import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";                          // import reducer
import tuitsReducer from "./tuits/tuits-reducer";
import EditProfile from "./edit-profile/edit-profile-component";
import profileReducer from "./profile/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";                       // import provider component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, user: profileReducer}});
function Tuiter() {
    return(
        // provide the store to the rest of the application so it can pull from the global state
        <Provider store={store}>
            <div>
           <Nav/>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route index element={<ExploreComponent/>}/>
                        <Route path="profile"    element={<ProfileComponent/>}/>
                        <Route path="edit-profile"    element={<EditProfile/>}/>
                    </Routes>

                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>

            </div>

        </div>
        </Provider>
    );
}
export default Tuiter