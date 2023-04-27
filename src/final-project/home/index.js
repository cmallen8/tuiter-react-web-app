import React from "react";
import ShowChangesComponent from "../streaming-content";
import {useSelector} from "react-redux";
import FamilyComponent from "../streaming-content/family-content";

import ActionComponent from "../streaming-content/action-content";
import ComedyComponent from "../streaming-content/comedy-content";
const HomeComponent = () => {
    const { currentUser } = useSelector((state) => state.users);

    return(
        <div className="row">
            <div className="col-12 bg-light shadow mb-5 p-3 border border-1 border-primary rounded-2">

                <h4 className="text-secondary"><i className="bi bi-stars"></i> The TV Show Selector <i className="bi bi-stars"></i></h4><br />
                <span className="text-secondary"> With so much streaming content available, it's hard to keep track of all your viewing options! Use this handy app to look up tv shows and movies and find where to watch them.
                <br /><br />
                Plus, if you create an account, you can keep track of shows you've watched. Sign up now.
                </span>

                <div>
                    {!currentUser ? <ShowChangesComponent />: null}
                </div>

                <div>
                    {currentUser && (
                        <div>
                            <div>
                                {currentUser.userType === 'Family'? <FamilyComponent />: null}
                                {currentUser.userType === 'Action'? <ActionComponent />: null}
                                {currentUser.userType === 'Comedy'? <ComedyComponent />: null}
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
export default HomeComponent;