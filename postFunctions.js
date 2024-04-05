var loadPost = function() {
    var url = window.location.href.replace(/\/$/, '');  
    var lastSeg = url.substring(url.lastIndexOf('/') + 1);
    const thisPost = postData.filter((x) => lastSeg === x.URLTitle)[0]
    document.getElementById("postImage").innerHTML = `<div class="blogImgDiv"><img class="blogImg" src="./../images/${thisPost.coverImage}"></div>`
    if (thisPost.postType === "books") {
        document.getElementById("postTitle").innerHTML = thisPost.bookTitle;
        document.getElementById("postByline").innerHTML = thisPost.authorLine;
    }
    if (thisPost.postType === "blog") {
        document.getElementById("postTitle").innerHTML = thisPost.previewHeadline;
        document.getElementById("postByline").innerHTML = thisPost.previewBody;
    }  
}