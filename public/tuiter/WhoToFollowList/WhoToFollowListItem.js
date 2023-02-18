const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle wd-logo" src="${who.avatarIcon}">
                </div>
                <div class="col-8">
                    <span class="fw-bold">${who.userName}</span> <i class="fa-solid fa-circle-check"></i><br>
                    @${who.handle}
                </div>
                <div class="col-2">
                    <a class="btn btn-primary rounded-pill float-lg-end" href="#">Follow</a>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;