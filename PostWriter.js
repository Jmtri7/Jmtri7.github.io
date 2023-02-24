
function writeLink(url, text) {
  return "<a href='${githubURL}/${path}'>${text}</a><br>"
    .replace('${path}', url)
    .replace('${text}', text);
}

function writePosts() {
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
}
