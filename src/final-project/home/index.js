import React from "react";
import NavigationBar from "../navigation-bar";

const Home = () => {
    return(
        <div className="row mt-2">
            <div className="col-9">
                <h4>Welcome to this thing</h4><br />
                With so much streaming content available, it's hard to keep track of all your viewing options! Use this handy app to look up tv shows and movies and find where to watch them.
                <br /><br />
                Plus, if you create an account, you can keep track of shows you've watched. Sign up now.
            </div>
            <div className="col-3">
                <NavigationBar />
            </div>
        </div>
    );
};
export default Home;