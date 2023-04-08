import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit, likeTuit = () => {}}) => {
    const dispatch = useDispatch();
    return(
        <>
            <div className="row mt-2">
                <div className="col-3 text-start">
                    <i className="bi bi-chat-fill text-secondary"></i>
                    <span className="text-secondary">
                    {tuit.stats && tuit.stats.replies}</span>
                </div>
                <div className="col-3 text-start">
                    <i className="bi bi-arrow-repeat text-secondary"></i>
                    <span className="text-secondary">
                        {tuit.stats && tuit.stats.retuits}
                    </span>
                </div>
                <div className="col-3 text-start">
                    <div>
                        Likes: {tuit.likes}
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes + 1
                        }))} className="bi bi-heart-fill me-2 text-danger"></i>
                    </div>
                </div>
                <div className="col-3 text-start">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="bi bi-upload"></i>
                    </a>
                </div>
            </div>
        </>
    );
}
export default TuitStats;
