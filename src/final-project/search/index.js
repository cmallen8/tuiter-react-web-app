import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import {textSearch} from "../streaming-content/streaming-service";
import './index.css'
import {useSelector} from "react-redux";

function Search() {
    const { currentUser } = useSelector((state) => state.users);
    const { queryTerm } = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState(queryTerm);
    const [results, setResults] = useState({});

    const searchStreaming = async () => {
        const response = await textSearch(search);
        setResults(response);
        navigate(`/final-project/search/${search}`);
    };
    // keeps query in URL; updates query when new term entered
    useEffect(() => {
        if(queryTerm) {
            searchStreaming();
        }
    }, [queryTerm]);
    return (
        <div>

                <button onClick={searchStreaming} className="float-end btn btn-primary">Search</button>
                <input type="text"
                       className="form-control w-75"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       />
            <div className="container-fluid">
                <div className="row">
                {results.results && results.results.map((tvShow) => (
                    <div className="col" key={tvShow.id}>
                    <div className="mt-2">
                    <div className="card wd-width bg-light shadow mb-5 p-3 border-primary">


                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w1280${tvShow.backdrop_path}`} alt={`${tvShow.name}`} />
                            <div className="card-body">
                                <h5 className="">{tvShow.name}</h5>
                                <p className="card-text wd-crop-text">{tvShow.overview}</p>
                                <Link to={`/final-project/show-details/${tvShow.id}`} className="btn btn-primary">Find out more</Link>
                            </div>
                    </div>
                    </div>
                    </div>
                    ))}
                </div>

                <div>
                    {currentUser && (
                        <div>
                            <h2>{currentUser.username}</h2>
                            <h2>{currentUser.password}</h2>
                        </div>
                    )}
                </div>
            </div>



                <pre>
                    {JSON.stringify(results, null, 2)}
                </pre>

        </div>
    );
}
export default Search;