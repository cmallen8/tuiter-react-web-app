import React from "react";
import posts from './home-posts.json';
import HomePostItem from "./PostItem";

const HomePostList = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post =>
                    <HomePostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomePostList;