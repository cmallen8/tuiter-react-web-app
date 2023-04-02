import React from "react";

const PostSummaryItem = (
    {
        post = {
            topic: 'Space',
            userName: 'SpaceX',
            time: '2h',
            title: 'Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6ft bed',
            image: 'tesla-logo.png',
            liked: true,
            replies: 345,
            retuits: 432,
            likes: 2345,
            handle: '@spacex',
            tuit: 'You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars'
        }
    }
) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div><span className="fw-bold">{post.userName} </span>
                        <i className="bi bi-check-circle-fill text-primary"></i>  &middot; {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.tuit}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;