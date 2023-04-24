import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getShowDetails, getStreamingProviderPaid, getStreamingProviderFree} from "../streaming-content/streaming-service";
import { useSelector} from "react-redux";

function SearchDetails() {
    // const { currentUser } = useSelector((state) => state.users);
    const { id } = useParams();
    const [streamersPaid, setStreamersPaid] = useState([]);
    const [streamersFree, setStreamersFree] = useState([]);
    const [details, setDetails] = useState([]);
    const fetchStreamersPaid = async () => {
        const response = await getStreamingProviderPaid(id);
        setStreamersPaid(response);
    }

    const fetchStreamersFree = async () => {
        const response = await getStreamingProviderFree(id);
        setStreamersFree(response);
    }

    const fetchDetails = async () => {
        const response = await getShowDetails(id);
        setDetails(response);
    }

    useEffect(() => {
        fetchStreamersPaid();
        fetchStreamersFree();
        fetchDetails()
    }, []);

    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-3">

                    <img className="card-img" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${details.poster_path}`} alt={`${details.name}`} />
                </div>
                <div className="col-9">
                    <div className="fw-bold">{details.name}</div>
                    <div className="text-secondary fst-italic">{details.tagline}</div>
                    <div className="text-secondary">{details.overview}</div>
                    <div className="text-secondary"><span className="fw-bold"><i className="bi bi-camera-reels-fill"></i> Number of seasons: </span>{details.number_of_seasons}</div>
                    <div className="text-secondary"><span className="fw-bold"><i className="bi bi-tv"></i> Number of episodes: </span>{details.number_of_episodes}</div>
                    <div className="text-secondary"><span className="fw-bold"><i className="bi bi-calendar3"></i> Series premiere: </span>{details.first_air_date}</div>
                    <div className="text-secondary"><span className="fw-bold"><i className="bi bi-star-fill"></i> Series rating: </span>{details.vote_average}/10</div>



                    <br/>
                    <div className="text-secondary"><span className="fw-bold">Streaming options<br/><i className="bi bi-cast"></i> Paid:</span></div>

                    <div className="container-fluid">
                        <div className="row">
                            {streamersPaid && streamersPaid.map((streamersPaid) => (
                                <div className="col" key={streamersPaid.id}>
                                    <div className="mt-2">
                                        <div className="">
                                            <img className="wd-width-streamers" src={`https://www.themoviedb.org/t/p/original/${streamersPaid.logo_path}`} alt={`${streamersPaid.provider_name}`} />
                                            <div className="">
                                                <span className="text-secondary">{streamersPaid.provider_name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="text-secondary"><span className="fw-bold"><i className="bi bi-cast"></i> Free:</span></div>

                    <div className="container-fluid">
                        <div className="row">
                            {streamersFree && streamersFree.map((streamersFree) => (
                                <div className="col" key={streamersFree.id}>
                                    <div className="mt-2">
                                        <div className="">
                                            <img className="wd-width-streamers" src={`https://www.themoviedb.org/t/p/original/${streamersFree.logo_path}`} alt={`${streamersFree.provider_name}`} />
                                            <div className="">
                                                <span className="">{streamersFree.provider_name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <pre>{JSON.stringify(streamersPaid, null, 2)}</pre>
            <pre>{JSON.stringify(streamersFree, null, 2)}</pre>
            <pre>{JSON.stringify(details, null, 2)}</pre>
        </div>
    );
};

export default SearchDetails;