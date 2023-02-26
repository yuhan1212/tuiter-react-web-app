import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="wd-search-section col-10 mx-3">
                    <i className="wd-search-icon bi bi-search"></i>
                    <input className="wd-search-bar-content" type="text" placeholder="Search Tuiter"></input>
                </div>
                <div className="col-1 m-auto">
                    <a href="explore-settings.html"><i className="bi bi-gear-fill fs-2"></i></a>
                </div>
            </div>

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

            <div className="position-relative mb-2">
                <img src="/images/spaceX.jpeg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;