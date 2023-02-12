import React from "react";
import '../home/index.css';

const PostItem = (
    {
        post = {
            "avatarIcon": "moomin.jpg",
            "author": "Robert Zubrin",
            "userName": "robert_zubrin",
            "time": "July 31",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image": "../../images/family.jpg",
            "imageTitle": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
            "imageContent": "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
            "commentCnt": 22,
            "retweetCnt": 9,
            "likeCnt": 37
        }
    }
) => {
    return(
    <div className="wd-content-board d-flex">

        <img className="float-start wd-avatar" src={`/images/${post.avatarIcon}`}/>

        <div className="float-start" style={{"margin-left": "12px"}}>

            <div className="mb-1 d-flex">
                <div className="me-auto">
                    <span className="fw-bold">{post.author}</span>
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="wd-dark-gray"> @{post.userName} · {post.time}</span>

                </div>
                <div className="me-0"><a href="#" className="link-secondary"><i className="bi bi-three-dots"></i></a></div>

            </div>

            <p>{post.content}</p>

            <div className="wd-bord-pic">
                <img className="wd-pic-in-main-content"  src={`/images/${post.image}`}/>
                <p className="px-3 pt-3 mb-1">{post.imageTitle}</p>
                <p className="px-3 wd-dark-gray">{post.imageContent}</p>
            </div>

            <div className="wd-display-center">
                <div><a className="wd-display-horizontal-center" href="#">
                    <i className="bi bi-chat me-3"></i>{post.commentCnt}</a></div>

                <div><a className="wd-display-horizontal-center" href="#">
                    <i className="bi bi-repeat me-3"></i>{post.retweetCnt}</a></div>

                <div><a className="wd-display-horizontal-center" href="#">
                    <i className="bi bi-heart me-3"></i>{post.likeCnt}</a></div>

                <div><a className="wd-display-horizontal-center" href="#">
                    <i className="bi bi-upload me-3"></i></a></div>
                <div></div>
            </div>

        </div>



    </div>

    );
};

export default PostItem;