import React from "react";
import {useSelector, useDispatch} from "react-redux";
import tuits from "./index";

const TuitStats = () => {
    const likes = useSelector(state => state.tuits);
    const dispatch = useDispatch();

    const likeTuit = () =>
        dispatch({type: 'LIKE_TUIT'});
    const unlikeTuit = () =>
        dispatch({type: 'UNLIKE_TUIT'});

    return(
        <>
            <h2>Likes Counter with Redux</h2>

            Likes: {likes}

            <div className="row mt-2">
                <div className="col-3 text-start">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="bi bi-chat-fill"></i> <span className="text-secondary">
                                        {tuits.replies}
                                    </span>
                    </a>
                </div>
                <div className="col-3 text-start">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="bi bi-arrow-repeat"></i> <span className="text-secondary">
                                        {tuits.retuits}
                                    </span>
                    </a>
                </div>
                <div className="col-3 text-start">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i onClick={likeTuit} className="bi bi-heart-fill"></i> <span className="text-secondary">
                                        {likes}
                                    </span>
                    </a>
                </div>
                <div className="col-3 text-start">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="bi bi-upload"></i>
                    </a>
                </div>
            </div>



            <i onClick={likeTuit}

               className="fas fa-thumbs-up"></i>

            <i onClick={unlikeTuit}

               className="fas fa-thumbs-down"></i>

        </>

    );

}
export default TuitStats;
