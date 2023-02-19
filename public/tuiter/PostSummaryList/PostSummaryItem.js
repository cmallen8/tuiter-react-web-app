const PostSummaryItem = (post) => {
    return(`
       <li class="list-group-item">
       <div class="row">
            <div class="col-10 col-sm-10 col-md-10 col-lg-9 col-xl-9">
                <span class="text-secondary">${post.topic}</span><br>
                <span class="fw-bold">${post.userName}</span> <i class="fa-solid fa-circle-check"></i><span class="text-secondary"> - ${post.time}</span> <br>
                <span class="fw-bold">${post.title}</span>
            </div>
            <div class="col-2 col-sm-2 col-md-2 col-lg-3 col-xl-3">
                <img class="wd-image rounded-2 ms-1 mt-2" src="${post.image}">
            </div>
        </div>
       </li>
   `);
}
export default PostSummaryItem;