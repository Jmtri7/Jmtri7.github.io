posts = [

{
    "subject" : "Hello World!",
    "date" : "02/23/2023",
    "message" :
      "<br>My Github<br><br>"
      + "<a href='https://github.com/Jmtri7'>https://github.com/Jmtri7</a><br>"

      + "<br><br>Work In Progress<br><br>"
      + "<a href='https://jmtri7.github.io/EdgeFighter/'>Edge Fighter</a><br>"

      + "<br><br>Games<br><br>"
      + "<a href='https://jmtri7.github.io/OrcSlayer/'>Orc Slayer</a><br>"
      + "<a href='https://jmtri7.github.io/TileWorld/'>Tile World</a><br>"

      + "<br><br>Animations<br><br>"
      + "<a href='https://jmtri7.github.io/Render3D/'>Render 3D</a><br>"
      + "<a href='https://jmtri7.github.io/VisualMaths/'>Visual Maths</a><br>"
      + "<a href='https://jmtri7.github.io/SpaceStation/'>Space Station</a><br>"
      + "<a href='https://jmtri7.github.io/BouncingBoxes/'>Bouncing Boxes</a><br>"
      + "<a href='https://jmtri7.github.io/ProjectileViewer/'>Projectile Viewer</a><br>"

      + "<br><br>Senior Project Blog<br><br>"
      + "<a href='https://jmtri7.github.io/SeniorProject/'>https://jmtri7.github.io/SeniorProject/</a>"
    ,
    "img" : null,
    "video" : "seniorprojectdemo.mp4",
},

];

postDisplays = document.getElementsByClassName("postDisplay");

var post = document.createElement('DIV');

for (i = posts.length - 1; i >= 0; i--) {

  postString = '<div class="cols post"><div class="text">${subject}${newline}${date}${newline}${message}${newline}</div>${img}${video}</div>'
    .replace("${subject}", posts[i].subject)
    .replace("${date}", posts[i].date)
    .replace("${message}", posts[i].message)
    .replace("${img}", posts[i].img != null ? '<img class="media" src="media/${filename}">'.replace("${filename}", posts[i].img) : "")
    .replace("${video}", posts[i].video != null ? '<video class="media" controls><source src="media/${filename}" type="video/mp4"></video>'.replace("${filename}", posts[i].video) : "")
    .replaceAll("${newline}", '<br><br>');

  post.innerHTML = postString;

	for (j = 0; j < postDisplays.length; j++) {
  		postDisplays[j].innerHTML += post.innerHTML;
	}
}
