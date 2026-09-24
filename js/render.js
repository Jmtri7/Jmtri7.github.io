function renderCard({ title, category, url, accent }) {
  return `
    <a class="card" href="${url}" target="_blank" rel="noopener">
      <div class="card-swatch" style="background: ${accent}"></div>
      <div class="card-title">${title}</div>
      <div class="card-category">${category}</div>
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
