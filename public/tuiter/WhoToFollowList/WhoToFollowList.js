import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
               <!-- continue here -->
               <li class="list-group-item fw-bold fs-6">Who to follow</li>
               
               ${who.map(account => {return(WhoToFollowListItem(account));}).join('')}
               
               <li class="list-group-item"><a id="show-more" href="#"><br/> Show more</a></li>
           </ul>
           <div class="m-3">
                Terms of Service Privacy Policy
                Cookie Policy
                Accessibility
                Ads info
                More
                © 2023 Twitter, Inc.
            </div>
    `); }

export default WhoToFollowList;