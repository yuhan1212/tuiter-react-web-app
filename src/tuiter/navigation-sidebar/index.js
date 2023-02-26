import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <>
        <div className="list-group">
            <a className="list-group-item bi bi-twitter icon-blue" style={{color: "#299fd6"}}></a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="wd-icon-width bi bi-house-door-fill"></i>
                <span className="m-2 d-none d-xl-inline">
                    Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="wd-icon-width bi bi-hash"></i>
                <span className="m-2 d-none d-xl-inline">
                Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="wd-icon-width bi bi-tags-fill"></i>
                <span className="m-2 d-none d-xl-inline">
                Labs</span>
            </Link>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="wd-icon-width bi bi-bell-fill"></i>
                <span className="m-2 d-none d-xl-inline">
                Notifications</span>
            </a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="wd-icon-width bi bi-envelope-fill"></i>
                <span className="m-2 d-none d-xl-inline">
                Messages</span>
            </a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="wd-icon-width bi bi-bookmark-fill"></i>
                <span className="m-2 d-none d-xl-inline">
                Bookmarks</span>
            </a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="wd-icon-width bi bi-list-task"></i>
                <span className="m-2 d-none d-xl-inline">
                Lists</span>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="wd-icon-width bi bi-person-fill"></i>
                <span className="m-2 d-none d-xl-inline">
                Profile</span>
            </Link>
            <a className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="wd-icon-width bi bi-three-dots"></i>
                <span className="m-2 d-none d-xl-inline">
                More</span>
            </a>
        </div>
        <div className="d-grid mt-2">
            <a href="tweet.html"
               className="btn btn-primary btn-block rounded-pill">
                Tuit</a>
        </div>
    </>
    );
};
export default NavigationSidebar;

