import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {updateProfile} from "../reducers/profile_reducer";

const EditProfile = () => {
        const profile = useSelector(
            (state) => state.profile);
        let [newProfile, setNewProfile] = useState({name: profile.name, bio: profile.bio, location: profile.location, website: profile.website, bday: profile.bday});
        const dispatch = useDispatch();
        const updateProfileClickHandler = () => {
                dispatch(updateProfile(newProfile))
        }
        const nameChangeHandler = (event) => {
                newProfile.name = event.target.value;
                setNewProfile(newProfile);
        }
        const bioChangeHandler = (event) => {
                newProfile.bio = event.target.value;
                setNewProfile(newProfile);
        }
        const locationChangeHandler = (event) => {
                newProfile.location = event.target.value;
                setNewProfile(newProfile);
        }
        const websiteChangeHandler = (event) => {
                newProfile.website = event.target.value;
                setNewProfile(newProfile);
        }
        const bdayChangeHandler = (event) => {
                newProfile.bday = event.target.value;
                setNewProfile(newProfile);
        }
        return(
        <>
                <div className="row mb-2">
                        <div className="col-1 m-auto">
                                <Link to="/tuiter/profile"><i className="bi bi-x-lg wd-fg-black"></i></Link>
                        </div>

                        <div className="col-9 m-auto">
                                <span className="fw-bold">Edit Profile</span><br/>
                        </div>

                        <div className="col-2">
                                <button className="w-100 rounded-pill btn btn-dark float-end btn-sm border-right-2" onClick={(e) => {
                                        e.preventDefault()
                                        updateProfileClickHandler(profile)
                                }}>
                                Save</button>
                        </div>
                </div>

                <div className="position-relative">
                        <img src="../images/spaceX.jpeg" style={{"width": "100%", "height": "200px"}}/>
                        <br/>
                        <img src="../images/moomin.jpg" style={{"width": "120px", "height": "120px", "bottom": "-50px", "left": "10px", "border": "solid 3px white"}}
                             className="rounded-pill position-absolute border-1 border-white border-solid"/>
                </div>

                <br/><br/><br/>

                <form className="form-floating">
                        <input type="text" className="form-control" id="name" defaultValue={newProfile.name} onChange={nameChangeHandler}></input>
                                <label htmlFor="name">Name</label>
                </form>
                <br/>
                <form className="form-floating">
                        <textarea type="text" className="form-control text-break" rows= "3" id="bio" style={{"height": "100px"}} defaultValue={newProfile.bio} onChange={bioChangeHandler}></textarea>
                        <label htmlFor="bio">Bio</label>
                </form>
                <br/>
                <form className="form-floating">
                        <input type="text" className="form-control" id="location" defaultValue={newProfile.location} onChange={locationChangeHandler}></input>
                        <label htmlFor="location">Location</label>
                </form>
                <br/>
                <form className="form-floating">
                        <input type="text" className="form-control" id="website" defaultValue={newProfile.website} onChange={websiteChangeHandler}></input>
                        <label htmlFor="website">Website</label>
                </form>
                <br/>
                <form className="form-floating">
                        <input type="date" className="form-control" id="birthDate" defaultValue={newProfile.bday} onChange={bdayChangeHandler}></input>
                        <label htmlFor="birthDate">Birth date</label>
                </form>
                <br/>
                <span>Switch to professional</span><a href=""><i className="float-end bi bi-chevron-compact-right" style={{"color": "gray"}}></i></a>


        </>
    );
};

export default EditProfile;