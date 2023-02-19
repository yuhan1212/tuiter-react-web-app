import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(
        (state) => state.profile);
    return(
        <>
            <div className="row">
                <div className="col-1 m-auto">
                    <Link to="/tuiter/home"><i className="bi bi-arrow-left-short fs-3 wd-fg-black"></i></Link>
                </div>

                <div className="col-11" style={{lineHeight: "18px"}}>
                    <span className="fw-bold">{profile.firstName} {profile.lastName}</span><br/>
                    <span style={{color: "lightgray", fontSize: "15px"}}>6,114 Tuits</span>

                </div>
            </div>

            <div className="position-relative">
                <img src="../images/spaceX.jpeg" style={{"width": "100%", "height": "200px"}}/>
                <br/>
                <img src="../images/moomin.jpg" style={{"width": "120px", "height": "120px", "bottom": "-50px", "left": "10px", "border": "solid 3px white"}}
                     className="rounded-pill position-absolute border-1 border-white border-solid"/>
            </div>

            <Link to="/tuiter/edit-profile"><button className="rounded-pill border-solid border-1 border-dark btn float-end mt-2 ps-3 pe-3 fw-bold">
                Edit profile
            </button></Link>
            <br/>
            <br/>
            <br/>
            <div style={{lineHeight: "18px"}}>
                <span className="fw-bold" style={{fontSize: "20px"}}>{profile.firstName} {profile.lastName}</span><br/>
                {profile.handle}<br/><br/>

            <div>{profile.bio}</div><br/>

            <p>
            <span><i className="bi bi-geo-alt"></i> {profile.location}</span>
            <span className="ms-3"><i className="bi bi-balloon"></i> Born {profile.dateOfBirth}</span>
            <span className="ms-3"><i className="bi bi-calendar3"></i> Joined {profile.dateJoined}</span>
            </p>

            <p>
                {/*<i className="bi bi-browser-chrome"></i> Website <a href={profile.website}>{profile.website}</a>*/}
            </p>

                <p><span><b>{profile.followingCount}</b> Following   </span>
                    <b className="ms-3">{profile.followersCount}</b> Followers</p>
            </div>

        </>
    );
};

export default ProfileComponent;