const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const posts = JSON.parse(localStorage.getItem("posts")) ?? [];
const post = posts[id];

document.getElementById("name").innerHTML = post.name;
document.getElementById("image").src = post.image;
document.getElementById("description").innerHTML = post.description;
document.getElementById("content").innerHTML = post.content;

// Gan comment chco bai viet
document.getElementById("cmt").innerHTML = `
    <div class="fb-comments" data-href="${window.location.href}" data-width="" data-numposts="5"></div>
`;