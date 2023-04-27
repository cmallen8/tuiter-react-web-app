import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getAction} from "../streaming-content/streaming-service";
import { useSelector} from "react-redux";

function ActionComponent() {
    const { currentUser } = useSelector((state) => state.users);
    const { popularID } = useParams();
    const [actionShows, setActionShows] = useState([]);
    const fetchActionShows = async () => {
        const response = await getAction();
        setActionShows(response);
    }

    useEffect(() => {
        fetchActionShows();
    }, []);

    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="container-fluid">
                    <div className="row">
                        <div>
                            <h4 className="text-secondary"><i className="bi bi-people-fill"></i> Popular Now: Action Shows!</h4>
                        </div>
                        {actionShows && actionShows.map((actionShows) => (
                            <div className="col" key={actionShows.id}>
                                <div className="mt-2">
                                    <div className="">
                                        <Link to={`/final-project/show-details/${actionShows.id}`} className="btn">
                                        <img className="wd-width-streamers" src={`https://www.themoviedb.org/t/p/original/${actionShows.poster_path}`} alt={`${actionShows.name}`} />
                                        </Link>
                                        <div className="">
                                            <Link to={`/final-project/show-details/${actionShows.id}`} className="btn">
                                            <span className="text-secondary">{actionShows.name}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ActionComponent;