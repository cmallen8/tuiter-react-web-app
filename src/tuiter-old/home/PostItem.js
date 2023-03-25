import React from "react";

const HomePostItem = (
    {
        post = {
            "name": "New York Post",
            "userName": "@nypost",
            "userImage": "../../images/New-York-Post-Twitter.png",
            "time": "23h",
            "post": "Grimes seen reading Karl Marx following split with world&#39;s second&#45;richest man Elon Musk",
            "image": "../../images/grimes.webp",
            "imageTitle": "",
            "imageDescription": "",
            "imageLink": "",
            "comments": "965",
            "retuits": "2.4K",
            "likes": "4K"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={45} className="rounded-circle" src={`/images/${post.userImage}`}/>
                </div>
                <div className="col-11">
                    <div className="ms-3 me-4">
                        <div className="row">
                            <div className="col-11">
                                <span className="fw-bold">
                                    {post.name}
                                </span> <i className="bi bi-check-circle-fill text-primary"></i>
                                <span className="text-secondary"> {post.userName} &middot; {post.time}</span>
                                <br/>
                                <span className="text-black">{post.post}</span>
                            </div>
                            <div className="col-1">
                                <span className="text-secondary text-end"><i className="bi bi-three-dots"></i></span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="card border-secondary me-2" style={{padding: "0px"}}>
                                <img className="card-img-top" style={{objectFit:"fill"}} src={`/images/${post.image}`}/>
                                <div className="card-body">
                                    <div className="card-title">
                                        {post.imageTitle}
                                    </div>
                                    <div className="card-text text-secondary">
                                        {post.imageDescription}
                                    </div>
                                    <div className="text-secondary">
                                        {post.imageLink}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-3 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-chat-fill"></i>
                                    <span className="text-secondary">
                                        {post.comments}
                                    </span>
                                </a>
                            </div>
                            <div className="col-3 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-arrow-repeat"></i>
                                    <span className="text-secondary">
                                        {post.retuits}
                                    </span>
                                </a>
                            </div>
                            <div className="col-3 text-start">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-heart-fill"></i>
                                    <span className="text-secondary">
                                        {post.likes}
                                    </span>
                                </a>
                            </div>
                            <div className="col-3 text-start">
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
export default HomePostItem;