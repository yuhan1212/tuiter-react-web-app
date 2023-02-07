import PostItem from "./PostItem.js";
import posts from "./posts.js"
const PostList = () => {
    return (`
            
           <!-- postList -->
           
           ${posts.map(post => {return(PostItem(post));}).join('')}
           
    `); }

export default PostList;