import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11" >
                    <div class="position-relative w-100">
                    <input id="text-field-search"
                           type="text"
                           placeholder="Search Tuiter"
                           class="rounded-pill form-control ps-5">
                    <span class="fas fa-search wd-gear-image position-absolute"></span>
                    </div>
                </div>
                <div class="col-1 mt-2 float-end">
                    <a href="explore-settings.html"><i class="fa-solid fa-gear" style="font-size: 1.4em;"></i></a>
                </div>
           </div>
           <div class="mt-2"></div>
           <div class="nav mb-2 nav-tabs">
                <div class="d-block nav-item"><a class="nav-link active" href="#">For you</a></div>
                <div class="d-block nav-item"><a class="nav-link" href="#">Trending</a></div>
                <div class="d-block nav-item"><a class="nav-link" href="#">News</a></div>
                <div class="d-block nav-item"><a class="nav-link" href="#">Sports</a></div>
                <div class="nav-item d-none d-md-block"><a class="nav-link" href="#">Entertainment</a></div>
           </div>
           <div class="row mt-2">
                <div class="position-relative">
                <img class="wd-grey-border" src="starship.webp" style="width:100%">
                    <h2 class="text-black position-absolute bottom-0">SpaceX's Starship</h2>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
