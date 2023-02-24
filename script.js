
function writeLink(url, text) {
  return "<a href='${githubURL}/${path}'>${text}</a><br>"
    .replace('${path}', url)
    .replace('${text}', text);
}

posts = [

{
    "subject" : "Hello World!",
    "date" : "02/24/2023",
    "message" :

      "<br>My Github<br><br>"

      + "<a href='https://github.com/Jmtri7'>https://github.com/Jmtri7</a><br>"

      + "${newline}Work In Progress${newline}"

      + writeLink('JSengine', 'JS Engine')

      + "${newline}Games${newline}"

      + writeLink('OrcSlayer', 'Orc Slayer')
      + writeLink('TileWorld', 'Tile World')

      + "${newline}Animations${newline}"

      + writeLink('Render3D', 'Render 3D')
      + writeLink('VisualMaths', 'Visual Maths')
      + writeLink('SpaceStation', 'Space Station')
      + writeLink('BouncingBoxes', 'Bouncing Boxes')
      + writeLink('ProjectileViewer', 'Projectile Viewer')

      + "${newline}Senior Project Blog${newline}"

      + writeLink('SeniorProject', '${githubURL}/SeniorProject/'),

    "img" : null,
    "video" : "seniorprojectdemo.mp4",
},

];

postDisplays = document.getElementsByClassName("postDisplay");

var post = document.createElement('DIV');

for (i = posts.length - 1; i >= 0; i--) {

  postString = '<div class="cols post"><div><div class="header">${subject}${newline}${date}</div><br>${message}${newline}</div>${img}${video}</div>'
    .replace("${subject}", posts[i].subject)
    .replace("${date}", posts[i].date)
    .replace("${message}", posts[i].message)
    .replace("${img}", posts[i].img != null ? '<img class="media" src="media/${filename}">'.replace("${filename}", posts[i].img) : "")
    .replace("${video}", posts[i].video != null ? '<video class="media" controls><source src="media/${filename}" type="video/mp4"></video>'.replace("${filename}", posts[i].video) : "")
    .replaceAll("${newline}", '<br><br>')
    .replaceAll("${githubURL}", 'https://jmtri7.github.io');

  post.innerHTML = postString;

	for (j = 0; j < postDisplays.length; j++) {
  		postDisplays[j].innerHTML += post.innerHTML;
	}
}
