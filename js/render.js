function renderLink({ text, url }) {
  return `<a href="${url}">${text}</a><br>`;
}

function renderSection({ heading, links }) {
  const linkList = links.map(renderLink).join("");
  return `${heading}<br>${linkList}<br>`;
}

function renderPost(post) {
  const message = post.sections.map(renderSection).join("");
  const img = post.img ? `<img class="media" src="assets/media/${post.img}">` : "";
  const video = post.video
    ? `<video class="media" controls><source src="assets/media/${post.video}" type="video/mp4"></video>`
    : "";

  return `
    <div class="cols post">
      <div>
        <div class="header">${post.subject}<br><br>${post.date}</div>
        <br>
        ${message}
      </div>
      ${img}
      ${video}
    </div>
  `;
}

function renderPosts() {
  const html = [...posts].reverse().map(renderPost).join("");
  document.querySelectorAll(".postDisplay").forEach((el) => {
    el.innerHTML = html;
  });
}

document.addEventListener("DOMContentLoaded", renderPosts);
