const post = document.getElementsByClassName("post")[0];

function sendRequestAjax(page){
    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
}).then(res => res.json())
    .then(data => {
        for (x of data.slice(page*10, (page+1)*10)) {
            post.innerHTML += `
        <div class="postContainer">        
        <div class="postTitle">${x.title}</div>
        <div class="postBody">${x.body}</div>
        </div>
`
        }
        isAjax = false
    })
    .catch(err => console.log(err));
} 

sendRequestAjax(0)

let pageNumber = 1;
let isAjax = false;
addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isAjax) {
        sendRequestAjax(pageNumber);
            pageNumber++;
    }
})