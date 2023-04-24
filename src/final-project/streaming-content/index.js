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
                    <div className="row">
                        <div>
                            <h4 className="text-secondary">Popular Now!</h4>
                        </div>
                        {streamersPopular && streamersPopular.map((streamersPopular) => (
                            <div className="col" key={streamersPopular.id}>
                                <div className="mt-2">
                                    <div className="">
                                        <img className="wd-width-streamers" src={`https://www.themoviedb.org/t/p/original/${streamersPopular.poster_path}`} alt={`${streamersPopular.name}`} />
                                        <div className="">
                                            <span className="text-secondary">{streamersPopular.name}</span>
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