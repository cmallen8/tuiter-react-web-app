import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuit, likeTuit, unlikeTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuit = {
            topic: 'Space',
            userName: 'SpaceX',
            time: '2h',
            title: 'Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6ft bed',
            image: 'tesla-logo.png',
            liked: true,
            replies: 345,
            retuits: 432,
            likes: 2345,
            handle: '@spacex',
            tuit: 'You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars'
        }
    }
) =>{
    const tuits = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const likeTuitHandler = (id) => {
        dispatch(likeTuit(id))
    }
    const unlikeTuitHandler = (id) => {
        dispatch(unlikeTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={45} className="rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <div className="ms-3 me-4">

                       <div className="row">
                           <div className="col-12">
                               <i className="bi bi-x-lg float-end"
                                  onClick={() => deleteTuitHandler(tuit._id)}></i>
                            <span className="fw-bold">{tuit.userName} </span>
                            <i className="bi bi-check-circle-fill text-primary"></i> <span className="text-secondary">{tuit.handle} &middot; {tuit.time}</span>
                           </div>
                       </div>

                        <div className="row">
                            <div className="col-12">
                        <span className="text-black">{tuit.tuit}</span>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-3 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-chat-fill"></i> <span className="text-secondary">
                                        {tuit.replies}
                                    </span>
                                </a>
                            </div>
                            <div className="col-3 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-arrow-repeat"></i> <span className="text-secondary">
                                        {tuit.retuits}
                                    </span>
                                </a>
                            </div>
                            <div className="col-3 text-start">
                                {!tuit.liked &&
                                    <button onClick={() => likeTuitHandler(tuit._id)}
                                        className="text-secondary border-0 bg-body">
                                    <i className="bi bi-heart-fill"></i>&nbsp;&nbsp;
                                        {tuit.likes}
                                </button>
                                }
                                {tuit.liked &&
                                    <button onClick={() => unlikeTuitHandler(tuit._id)}
                                        className="text-danger border-0 bg-body">
                                        <i className="bi bi-heart-fill"></i>&nbsp;&nbsp;
                                        {tuit.likes}
                                    </button>
                                }

                            </div>
                            <div className="col-3 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-upload"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

    );
};
export default TuitItem;
