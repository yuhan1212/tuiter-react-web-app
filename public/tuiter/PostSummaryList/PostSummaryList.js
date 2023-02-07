import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
            <!-- Search bar -->
            <div class="row">
                <div class="wd-search-section col-10 mx-3">
                    <img class=wd-search-icon src="../img/search-icon.png"/>
                    <input class="wd-search-bar-content" type="text" placeholder="Search Tuiter">
                </div>
                <div class="col-1 m-auto">
                    <a href= "explore-settings.html"><i class="fa-solid fa-gear" style="size: 40px;"></i></a>
                </div>
            </div>
            
            <!-- Tabs -->
            <ul class="my-2 nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            
            <!-- Image -->
            <div class="pos-relative">
                <img class="pos-relative w-100" src="../../images/spaceX.jpeg"/>
            </div>
            <div class="wd-main-img-lines">SpaceX's Starship</div>
            
            <!-- Content -->
            <ul class="list-group">
               <!-- continue here -->
               
               ${posts.map(post => {return(PostSummaryItem(post));}).join('')}
               
           </ul>
    `); }

export default PostSummaryList;