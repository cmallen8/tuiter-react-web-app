const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 ">
                <span class="fa-stack">
                    <i class="fa-solid fa-house fa-stack-2x" style="font-size: 15px; margin-top: 3px; text-align: left"></i>
                    <i class="fa-solid fa-circle fa-stack-1x" style="color: #1DA1F2; font-size: 5px; vertical-align: top;"></i>
                </span>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">Home</div>
        </div>
    </a>
    <a class="list-group-item active" href="index.html">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <i class="fa-solid fa-hashtag fw-bold"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">Explore</div>
        </div>
    </a>
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <i class="fa-solid fa-bell"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">Notifications</div>
        </div>
    </a>
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">Messages</div>
        </div>
    </a>
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <i class="fa-solid fa-bookmark"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">Bookmarks</div>
        </div>
    </a>
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <i class="fa-solid fa-list"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">Lists</div>
        </div>
    </a>
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">Profile</div>
        </div>
    </a>
    <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="col-xxl-10 col-xl-10 d-none d-xl-block">More</div>
        </div>
    </a>        
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;