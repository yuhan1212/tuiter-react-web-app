import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    const likeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({...tuit,
            likes: tuit.liked? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked}
    ))
    }
    const dislikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({...tuit,
            dislikes: tuit.disliked? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked: !tuit.disliked}
        ))
    }
    return(
        <div className="wd-content-board d-flex">

            <img className="float-start wd-avatar" src={`/images/${tuit.image}`}/>

            <div className="w-100 float-start" style={{"marginLeft": "12px"}}>

                <div className="mb-1 d-flex">
                    <div className="me-auto">
                        <span className="fw-bold">{tuit.userName}</span>
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="wd-dark-gray"> {tuit.handle} · {tuit.time}</span>

                    </div>
                    <div className="me-0">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>

                </div>

                <p>{tuit.tuit}</p>

                <div className="wd-display-center">
                    <div><a className="wd-display-horizontal-center" href="#">
                        <i className="bi bi-chat me-3"></i>{tuit.replies}</a></div>

                    <div><a className="wd-display-horizontal-center" href="#">
                        <i className="bi bi-repeat me-3"></i>{tuit.retuits}</a></div>

                    <div><a className="wd-display-horizontal-center" href="" onClick={(e) => {
                        e.preventDefault();
                        likeTuitHandler(tuit)
                    }}><i className={`bi bi-heart me-3 ${tuit.liked ? "wd-pink" : ""}`}></i>{tuit.likes}</a></div>


                    <div><a className="wd-display-horizontal-center" href="" onClick={(e) => {
                        e.preventDefault();
                        dislikeTuitHandler(tuit)
                    }}><i className={`bi bi-hand-thumbs-down me-3 ${tuit.disliked ? "wd-pink" : ""}`}></i>{tuit.dislikes}</a></div>


                    <div><a className="wd-display-horizontal-center" href="#">
                        <i className="bi bi-upload me-3"></i></a></div>
                    <div></div>
                </div>

            </div>



        </div>

    );
};

export default TuitItem;