const container = document.getElementById("gallery");

media.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <img src="${item.src}" alt="Image" />
    <div class="stats">
      <span>👁️ ${item.views}</span>
      <span>❤️ ${item.likes}</span>
    </div>
  `;
  container.appendChild(div);
});
