import React from "react";
import ShowChangesComponent from "../streaming-content";
import {useSelector} from "react-redux";
const HomeComponent = () => {
    const { currentUser } = useSelector((state) => state.users);

    return(
        <div className="">
                <h4 className="text-secondary">Welcome to this thing</h4><br />
                With so much streaming content available, it's hard to keep track of all your viewing options! Use this handy app to look up tv shows and movies and find where to watch them.
                <br /><br />
                Plus, if you create an account, you can keep track of shows you've watched. Sign up now.
                <br /> <br/>

            <ShowChangesComponent />


            <div>
                {currentUser && (
                    <div>
                        <h2>{currentUser.username}</h2>
                        <h2>{currentUser.password}</h2>
                    </div>
                )}
            </div>

            Data attributions:
            <ul>
                <li className="list-group-item">JustWatch: Streaming networks</li>
                <li className="list-group-item">The Movie DataBase: All TV show information</li>
            </ul>



        </div>
    );
};
export default HomeComponent;