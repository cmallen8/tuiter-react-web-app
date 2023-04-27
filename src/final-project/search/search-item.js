import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SearchItem = (
    {
        show = {
            name: 'test',
            poster_path: 'test'
        }
    }
) =>{

    const dispatch = useDispatch();
    return(
        <li className="list-group-item">
            <div className="text-secondary fw-bold"><h3>Watched List<br/></h3><i className="bi bi-cast"></i> Paid:</div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <img className="card-img" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${show.poster_path}`} alt={`${show.name}`} />
                    </div>
               <div className="col-9">
                   {show.name}
               </div>
                </div>
            </div>
        </li>

    );
};
export default SearchItem;

