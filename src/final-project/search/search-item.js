import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {textSearch} from "../streaming-content/streaming-service";
import {Link} from "react-router-dom";

const SearchItem = (
    {
        show = {}
    }
) =>{
    const [search, setSearch] = useState("");
    const [results, setResults] = useState({});
    const searchStreaming = async () => {
        const response = await textSearch(search);
        setResults(response);
        console.log(response);
    };
    const dispatch = useDispatch();
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
                            <div className="col-2 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-chat-fill"></i> <span className="text-secondary">
                                        {tuit.replies}
                                    </span>
                                </a>
                            </div>
                            <div className="col-2 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-arrow-repeat"></i> <span className="text-secondary">
                                        {tuit.retuits}
                                    </span>
                                </a>
                            </div>
                            <div className="col-3 text-start">
                                Likes: {tuit.likes}
                                <i onClick={() => updatePosTuitHandler(tuit._id)}
                                   className="bi bi-heart-fill me-2 text-danger"></i>
                            </div>
                            <div className="col-4 text-start">
                                Dislikes: {tuit.dislikes}
                                <i onClick={() => updateNegTuitHandler(tuit._id)}
                                   className="bi bi-hand-thumbs-down-fill me-2 text-dark"></i>
                            </div>
                            <div className="col-1 text-start">
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
export default SearchItem;




<img className="card-img-top" src="https://image.tmdb.org/t/p/w1280/{tvShow.poster_path}" alt="Card image cap" />

<p className="card-text">{tvShow.overview}</p>
<a href="#" className="btn btn-primary">Go somewhere</a>

<div className="row">
    <ul className="list-group">
        {results.results && results.results.map((tvShow) => (
            <li className="list-group-item mt-2">
                <div className="row">
                    <div className="col-3 p-0 border-3">
                        <img className="wd-image" src={`https://image.tmdb.org/t/p/w1280${tvShow.poster_path}`} alt={`${tvShow.name}`}/>
                    </div>
                    <div className="col-9">
                        <h5 className="" key={tvShow.id}>{tvShow.name}</h5>
                        <p className="">
                            {tvShow.overview}
                        </p>


                        <Link className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </li>
        ))}
    </ul>
</div>
