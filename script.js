posts = [

{
    "subject" : "My First Post",
    "date" : "10/20/2020",
    "message" : "This is my first post.",
    "img" : "",
    "video" : "",
},

{
    "subject" : "Bows & Arrows",
    "date" : "10/21/2020",
    "message" : "I love it when my friends help me test new features!",
    "img" : "testing.PNG",
    "video" : "",
},

{
    "subject" : "Project Status Update #4",
    "date" : "10/22/2020",
    "message" : "Be sure to full-screen the video before pressing play.",
    "img" : "",
    "video" : "update4.mp4",
},

]

newline = '<br><br>';

postDisplays = document.getElementsByClassName("postDisplay");
var post = document.createElement('DIV');
for (i = posts.length - 1; i >= 0; i--) {

  postString = '';

  postString += '<div class="cols post">';

  postString +=
  '<div class="text">'
  + posts[i].subject 
  + newline 
  + posts[i].date 
  + newline
  + posts[i].message
  + newline
  + '</div>'
  ;

  if(posts[i].img != "") {
    postString += 
    '<img class="media" src="media/'
    + posts[i].img 
    + '">'
  }

  if(posts[i].video != "") {
    postString += '<video class="media" controls>'
    postString += '<source src="media/' + posts[i].video + '" type="video/mp4">'
    postString += '</video>'
  }

  postString += newline;

  postString += '</div>';

  post.innerHTML = postString;

	for (j = 0; j < postDisplays.length; j++) {
  		postDisplays[j].innerHTML += post.innerHTML;
	}
}










