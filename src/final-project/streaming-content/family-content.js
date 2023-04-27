import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getFamily} from "../streaming-content/streaming-service";
import { useSelector} from "react-redux";

function FamilyComponent() {
    const { currentUser } = useSelector((state) => state.users);
    const { popularID } = useParams();
    const [familyShows, setFamilyShows] = useState([]);
    const fetchFamilyShows = async () => {
        const response = await getFamily();
        setFamilyShows(response);
    }

    useEffect(() => {
        fetchFamilyShows();
    }, []);

    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="container-fluid">
                    <div className="row">
                        <div>
                            <h4 className="text-secondary"><i className="bi bi-people-fill"></i> Popular Now: Family Friendly Content!</h4>
                        </div>
                        {familyShows && familyShows.map((familyShows) => (
                            <div className="col" key={familyShows.id}>
                                <div className="mt-2">
                                    <div className="">
                                        <Link to={`/final-project/show-details/${familyShows.id}`} className="btn">
                                        <img className="wd-width-streamers" src={`https://www.themoviedb.org/t/p/original/${familyShows.poster_path}`} alt={`${familyShows.name}`} />
                                        </Link>
                                        <div className="">
                                            <Link to={`/final-project/show-details/${familyShows.id}`} className="btn">
                                            <span className="text-secondary">{familyShows.name}</span>
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

export default FamilyComponent;