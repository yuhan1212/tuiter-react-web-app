const PostSummaryItem = item => {
    return(`
        <div class="list-group-item" class="my-3 mx-4">
            <div class="row">
                <div class="col-8">
                    <span class="wd-gray-words"> ${item.topic} </span>
                    ${item.topic !== '' ? '<br/>' : ''}
                    
                    <span class="fw-bold" style="color: #ffffff">${item.userName}</span>
                    ${item.userName !== '' ? '<i class="fa-solid fa-circle-check" style="color: #1f9bf0"></i>' : ''}
                    <span class="wd-gray-words"> - ${item.time} </span>
                     ${item.time !== '' ? '<br/>' : ''}
                     
                    <span class="fw-bold">${item.title}</span>
                </div>
                <div class="col-4 m-auto">
                    <img class="wd-picture" src="${item.image}"/>
                </div>
            </div>
        </div>`
    );
}
export default PostSummaryItem;