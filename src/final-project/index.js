import React from "react";
import NavigationBar from "../navigation-bar";
import HomeComponent from "./home";

const Home = () => {
    return(
        <div className="row mt-2">
            <div className="col-10">
<HomeComponent />
            </div>
            <div className="col-2">
                <NavigationBar />
            </div>
        </div>
    );
};
export default Home;