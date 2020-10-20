posts = [

{
    "subject": "My First Post",
    "message": "This is my first post."
},

{
    "subject": "My Second Post",
    "message": "This is my second post."
},

]

var postDisplays = document.getElementsByClassName("postDisplay");

console.log(postDisplays[1]);

var post = document.createElement('DIV');
for (i = 0; i < posts.length; i++) {
  post.innerHTML = '<div>' + posts[i].subject + '<br>' + posts[i].message + '<br><br></div>';
  postDisplays[0].appendChild(post.firstChild);
}










