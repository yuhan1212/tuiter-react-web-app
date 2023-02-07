const PostItem = item => {
    return(`
    <div class="wd-content-board" xmlns="http://www.w3.org/1999/html">
        
            <img class="float-left wd-avatar" src=${item.avatarIcon}/>
            
            <div class="float-left" style="margin-left: 60px">
            
                <div class="mb-1 d-flex">
                    <div class="me-auto">
                        <span class="text-white fw-bold">${item.author}</span>
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="wd-dark-gray"> @${item.userName} · ${item.time}</span>
                       
                    </div>
                    <div class="me-0"><a href="#" class="link-secondary"><i class="fa-solid fa-ellipsis"></i></a></div>
                    
                </div>
                
                <p class="text-white">
                    ${item.content}
                </p>
                
                <div class="wd-bord-pic">
                    <img class="wd-pic-in-main-content" src="${item.image}">
                    <p class="text-white px-3 pt-3 mb-1">${item.imageTitle}</p>
                    <p class="px-3 wd-dark-gray">${item.imageContent}</p>
                </div>
                
                <div class="wd-display-center">
                    <div><a class="wd-display-horizontal-center" href="#">
                        <i class="fa-regular fa-message fa-lg me-3"></i>${item.commentCnt}</a></div>
                        
                   <div><a class="wd-display-horizontal-center" href="#">
                        <i class="fa-solid fa-retweet fa-lg me-3"></i>${item.retweetCnt}</a></div>
                        
                   <div><a class="wd-display-horizontal-center" href="#">
                        <i class="fa-regular fa-heart fa-lg me-3"></i>${item.likeCnt}</a></div>
                        
                   <div><a class="wd-display-horizontal-center" href="#">
                        <i class="fa-solid fa-share-from-square fa-lg me-3"></i></a></div>
              
                    <div></div>
                </div>
            </div>
            
    
    </div>
`
    );
}
export default PostItem;