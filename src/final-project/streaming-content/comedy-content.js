import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import {getComedy} from "./streaming-service";

function ComedyComponent() {
    const { currentUser } = useSelector((state) => state.users);
    const { popularID } = useParams();
    const [comedyShows, setComedyShows] = useState([]);
    const fetchComedyShows = async () => {
        const response = await getComedy();
        setComedyShows(response);
    }

    useEffect(() => {
        fetchComedyShows();
    }, []);

    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="container-fluid">
                    <div className="row">
                        <div>
                            <h4 className="text-secondary"><i className="bi bi-people-fill"></i> Popular Now: Comedy Shows!</h4>
                        </div>
                        {comedyShows && comedyShows.map((comedyShows) => (
                            <div className="col" key={comedyShows.id}>
                                <div className="mt-2">
                                    <div className="">
                                        <Link to={`/final-project/show-details/${comedyShows.id}`} className="btn">
                                        <img className="wd-width-streamers" src={`https://www.themoviedb.org/t/p/original/${comedyShows.poster_path}`} alt={`${comedyShows.name}`} />
                                        </Link>
                                        <div className="">
                                            <Link to={`/final-project/show-details/${comedyShows.id}`} className="btn">
                                            <span className="text-secondary">{comedyShows.name}</span>
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

export default ComedyComponent;