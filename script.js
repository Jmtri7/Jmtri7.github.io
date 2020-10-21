posts = [

{
    "subject" : "My First Post",
    "date" : "10/20/2020",
    "message" : "This is my first post.",
    "media" : "",
},

{
    "subject" : "Bows & Arrows",
    "date" : "10/21/2020",
    "message" : "I love it when my friends help me test new features!",
    "media" : "testing.png",
},

]

postDisplays = document.getElementsByClassName("postDisplay");
var post = document.createElement('DIV');
for (i = posts.length - 1; i >= 0; i--) {

  postString = '';

  postString += '<div class="cols post">';

  postString +=
  '<div class="text">'
  + posts[i].subject 
  + '<br>' 
  + posts[i].date 
  + '<br><br>' 
  + posts[i].message
  + '<br><br><br>' 
  + '</div>'
  ;

  if(posts[i].media != "") {
    postString += 
    '<img class="media" src="media/'
    + posts[i].media 
    + '">'
  }

  postString += '<br><br></div>';

  post.innerHTML = postString;

	for (j = 0; j < postDisplays.length; j++) {
  		postDisplays[j].innerHTML += post.innerHTML;
	}
}










