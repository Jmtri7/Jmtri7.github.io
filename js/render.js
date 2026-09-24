function renderCard({ title, category, url, thumbnail }) {
  return `
    <a class="card" href="${url}" target="_blank" rel="noopener">
      <img class="card-thumb" src="${thumbnail}" alt="${title} preview" loading="lazy">
      <div class="card-body">
        <div class="card-title">${title}</div>
        <div class="card-category">${category}</div>
      </div>
    </a>
  `;
}

function renderProjects() {
  const html = projects.map(renderCard).join("");
  document.querySelector(".projectGrid").innerHTML = html;
}

function renderVideo() {
  if (!seniorProjectVideo) return;
  document.querySelector(".videoDisplay").innerHTML =
    `<video class="media" controls><source src="assets/media/${seniorProjectVideo}" type="video/mp4"></video>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderVideo();
});
