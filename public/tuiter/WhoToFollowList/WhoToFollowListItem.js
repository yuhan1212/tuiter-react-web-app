const WhoToFollowListItem = item => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2"><img class="wd-avatar me-2" src="${item.avatarIcon}"/></div>
                <div class="col-7">${item.userName} <i class="fa-solid fa-circle-check" style="color: #1f9bf0"></i>
                    <br/>@${item.handle}</div>
                <div class="col-3 wd-horizontal-center"><button type="submit" class="btn btn-primary rounded-pill">Follow</button></div>
            </div>
        </li>`
    );
}
export default WhoToFollowListItem;