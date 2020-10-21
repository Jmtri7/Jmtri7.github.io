posts = [

{
    "subject" : "My First Post",
    "date" : "10/20/2020",
    "message" : "This is my first post."
},

{
    "subject" : "My Middle Post",
    "date" : "10/20/2020",
    "message" : "This is my second post."
},


{
    "subject" : "My Latest Post",
    "date" : "10/20/2020",
    "message" : "This is my second post."
},

]

postDisplays = document.getElementsByClassName("postDisplay");
var post = document.createElement('DIV');
for (i = posts.length - 1; i >= 0; i--) {

  post.innerHTML = 
  '<div class="post">' 
  + posts[i].subject 
  + '<br>' 
  + posts[i].date 
  + '<br>' 
  + posts[i].message 
  + '<br><br></div>';

	for (j = 0; j < postDisplays.length; j++) {
  		postDisplays[j].innerHTML += post.innerHTML;
	}
}










