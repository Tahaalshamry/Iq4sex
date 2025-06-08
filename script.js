const gallery = document.getElementById("gallery");

media.forEach((item) => {
  const container = document.createElement("div");
  container.className = "item";

  let element;
  if (item.type === "image") {
    element = document.createElement("img");
    element.src = item.src;
    element.alt = "صورة من المعرض";
  } else if (item.type === "video") {
    element = document.createElement("video");
    element.src = item.src;
    element.controls = true;
  }

  const stats = document.createElement("div");
  stats.className = "stats";
  stats.innerHTML = `
    <span><i class="fa-solid fa-eye"></i> ${item.views}</span>
    <span><i class="fa-solid fa-heart"></i> ${item.likes}</span>
  `;

  container.appendChild(element);
  container.appendChild(stats);
  gallery.appendChild(container);
});
