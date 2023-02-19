const PostItem = (posts) => {
    return(`
       <li class="list-group-item">
       <div class="row">
            <div class="col-1">
                <img class="rounded-circle wd-logo text-start" src="${posts.userImage}"><br>
            </div>
            <div class="col-11">
                <div class="ms-2 me-4">
                <div class="row">
                <div class="col-11">
                    <span class="fw-bold">${posts.name}</span> <i class="fa-solid fa-circle-check"></i><span class="text-secondary"> ${posts.userName} &middot; ${posts.time}</span> 
                    <br>
                    <span class="text-white">${posts.post}</span>
                    </div>
                <div class="col-1">
                    <span class="text-secondary text-end"><i class="fa-solid fa-ellipsis"></i></span></div>
                    </div>
                    <div class="mt-2">
                    
                        <div class="card border-secondary" style="padding: 0px; margin-right: 2px;">
                            <img class="card-img-top" style="object-fit: fill;" src="${posts.image}">
                            <div class="card-body">
                                <div class="card-title">
                                ${posts.imageTitle}</div>
                                <div class="card-text text-secondary">${posts.imageDescription}</div>
                                <div class="text-secondary">${posts.imageLink}</div>
                            </div>
                        </div>
                    </div> 
                
                <div class="row mt-2">
                    <div class="col-3 text-start">
                    <a href="#" class="text-decoration-none">
                        <i class="fa fa-comment text-secondary"></i>
                        <span class="text-secondary">${posts.comments}</span>
                    </a>
                    </div>
                    <div class="col-3 text-start">
                    <a href="#" class="text-decoration-none">
                        <i class="fa fa-solid fa-retweet text-secondary"></i>
                        <span class="text-secondary text-decoration-none">${posts.retuits}</span>
                    </a>
                    </div>
                    <div class="col-3 text-start">
                    <a href="#" class="text-decoration-none">
                        <i class="fa fa-heart text-secondary"></i>
                        <span class="text-secondary text-decoration-none">${posts.likes}</span>
                    </a>
                    </div>
                    <div class="col-3 text-start">
                    <a href="#" class="text-decoration-none">
                        <i class="fa-solid fa-arrow-up-from-bracket text-secondary"></i>
                    </a>
                    </div>
                </div> 
                </div>
            </div>
       </div>
       </li>
   `);
}
export default PostItem;