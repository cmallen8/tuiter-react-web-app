import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getPopular} from "../streaming-content/streaming-service";
import { useSelector} from "react-redux";

function ShowChangesComponent() {
    const { currentUser } = useSelector((state) => state.users);
    const { popularID } = useParams();
    const [streamersPopular, setStreamersPopular] = useState([]);
    const fetchStreamersPopular = async () => {
        const response = await getPopular();
        setStreamersPopular(response);
    }

    useEffect(() => {
        fetchStreamersPopular();
    }, []);

    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div>
                            <h4 className="text-secondary"><i className="bi bi-camera-reels"></i> Popular Now!</h4>
                        </div>
                        {streamersPopular && streamersPopular.map((streamersPopular) => (
                            <div className="col" key={streamersPopular.id}>
                                <div className="mt-2">
                                    <div className="">
                                        <Link to={`/final-project/show-details/${streamersPopular.id}`} className="btn">
                                        <img className="wd-width-streamers" src={`https://www.themoviedb.org/t/p/original/${streamersPopular.poster_path}`} alt={`${streamersPopular.name}`} /></Link>
                                        <div className="">
                                            <Link to={`/final-project/show-details/${streamersPopular.id}`} className="btn">
                                            <span className="text-secondary">{streamersPopular.name}</span></Link>
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

export default ShowChangesComponent;