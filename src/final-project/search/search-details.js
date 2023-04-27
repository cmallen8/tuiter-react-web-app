import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getShowDetails, getStreamingProviderPaid, getStreamingProviderFree} from "../streaming-content/streaming-service";
import {
    findWatchesByUserId,
    userWatchedShow,
    findUserIdByWatchesId,
    userUnWatchedShow
} from "../watched/watched-service";
import { useSelector} from "react-redux";
import {userPlaylistedShow, userUnPlaylistedShow, findPlaylistedShowByUserId, findUserIdByPlaylistsId} from "../playlisted/playlisted-service";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
//import {userWatchedShowThunk} from "../watched/watched-thunk";
import {createShow} from "../shows/shows-service";

function SearchDetails() {
    const { currentUser } = useSelector((state) => state.users);
    // id = show id
    const { id } = useParams();
    //const currentUserId = currentUser._id;
    const [streamersPaid, setStreamersPaid] = useState([]);
    const [streamersFree, setStreamersFree] = useState([]);
    const [details, setDetails] = useState([]);
    const [watchedByUserId, setWatchedByUserId] = useState([]);
    const [watchedByShowId, setWatchedByShowId] = useState([{userId: '0', showId: '0', poster_path: '0', showName: '0'}]);

    const [playlistedByUserId, setplaylistedByUserId] = useState([]);
    const [playlistedByShowId, setplaylistedByShowId] = useState([{userId: '0', showId: '0'}]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToWatchedList = async () => {
        const response = await userWatchedShow(currentUser._id, id)
//        await dispatch(userWatchedShowThunk(currentUser._id, id, details.poster_path, details.showName));
        //const response = await userWatchedShow(currentUser._id, id, details.poster_path, details.showName)
        navigate("/final-project/profile");

    };

    const unWatched = async () => {
        const response = await userUnWatchedShow(currentUser._id, id)
        navigate(`/final-project/profile/${currentUser._id}`);

    };
    const addToPlaylist = async () => {
        const response = await userPlaylistedShow(currentUser._id, id)
        navigate("/final-project/profile");

    }
    /*
    const addToShow = async () => {
        const response = await createShow(getShowDetails(id))
       // navigate("/final-project/profile");

    }
     */

    const unPlaylisted = async () => {
        const response = await userUnPlaylistedShow(currentUser._id, id)
        navigate("/final-project/profile");

    };

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

    const fetchWatchedByUserId = async () => {
        const response = await findWatchesByUserId(currentUser._id);
        setWatchedByUserId(response);
    }

    const fetchUserIdByWatchesId = async () => {
        const response = await findUserIdByWatchesId(id);
        setWatchedByShowId(response);
    }

    const fetchPlaylistedShowByUserId = async () => {
        const response = await findPlaylistedShowByUserId(currentUser._id);
        setplaylistedByUserId(response);
    }

    const fetchUserIdByPlaylistsId = async () => {
        const response = await findUserIdByPlaylistsId(id);
        setplaylistedByShowId(response);
    }

    useEffect(() => {

        fetchDetails();

        try {
            fetchStreamersPaid();
            fetchStreamersFree();
            fetchWatchedByUserId();
            fetchUserIdByWatchesId();
            fetchPlaylistedShowByUserId();
            fetchUserIdByPlaylistsId();
        }catch (err) {
            console.log(err);
        }


    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="bg-light shadow mb-5 p-3 border border-1 border-primary rounded-2">
                    <div className="row">
                        <div className="col-3">
                            <img className="card-img" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${details.poster_path}`} alt={`${details.name}`} />
                        </div>
                        <div className="col-9">
                            <h3 className="fw-bold text-secondary">{details.name}</h3>
                                <div className="text-secondary fst-italic">{details.tagline}</div>
                                <div className="text-secondary">{details.overview}</div>
                                <br />
                                <div className="text-secondary"><span className="fw-bold"><i className="bi bi-camera-reels-fill"></i> Number of seasons: </span>{details.number_of_seasons}</div>
                                <div className="text-secondary"><span className="fw-bold"><i className="bi bi-tv"></i> Number of episodes: </span>{details.number_of_episodes}</div>
                                <div className="text-secondary"><span className="fw-bold"><i className="bi bi-calendar3"></i> Series premiere: </span>{details.first_air_date}</div>
                                <div className="text-secondary"><span className="fw-bold"><i className="bi bi-star-fill"></i> Series rating: </span>{details.vote_average}/10</div>
                            <br />
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            {currentUser && (<div>
                                                <div>
                                                    {!watchedByShowId.find(item => item.userId === currentUser._id) && (
                                                        <button className="btn btn-primary text-white fw-bold mb-2"  onClick={addToWatchedList}>Add to Watched List</button>
                                                    )}
                                                </div>
                                                <div>
                                                    {watchedByShowId.find(item => item.userId === currentUser._id) && (
                                                        <button className="btn btn-primary text-white fw-bold" onClick={unWatched}>Remove from Watched List</button>
                                                    )}
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div>
                                            {currentUser && (<div>
                                            <div>
                                                {!playlistedByShowId.find(item => item.userId === currentUser._id) && (
                                                <button className="btn btn-primary text-white fw-bold mb-2" onClick={addToPlaylist}>Add to Playlist</button>
                                                )}
                                            </div>
                                            <div>
                                                {playlistedByShowId.find(item => item.userId === currentUser._id) && (
                                                <button className="btn btn-primary text-white fw-bold" onClick={unPlaylisted}>Remove from Playlist</button>
                                                    )}
                                            </div>
                                                </div>)}
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>

                    <div className="text-secondary fw-bold"><h3>Streaming options<br/></h3><i className="bi bi-cast"></i> Paid:</div>
                    <div className="container-fluid">
                        <div className="row">
                            {streamersPaid && streamersPaid.map((streamersPaid) => (
                                <div className="col" key={streamersPaid.id}>
                                    <div className="mt-2">
                                        <div className="">
                                            <img className="wd-width-streamers border border-1 border-primary" src={`https://www.themoviedb.org/t/p/original/${streamersPaid.logo_path}`} alt={`${streamersPaid.provider_name}`} />
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
                                            <img className="wd-width-streamers border border-1 border-primary" src={`https://www.themoviedb.org/t/p/original/${streamersFree.logo_path}`} alt={`${streamersFree.provider_name}`} />
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


                </div>
            </div>
        </div>
    );
};

export default SearchDetails;