// بيانات الصور والفيديوهات (تعدلها يدويًا أنت فقط)
const mediaData = [
    {
        id: 1,
        type: "image",
        url: "images/photo1.jpg",
        title: "صورة جميلة",
        views: 0,
        likes: 0
    },
    {
        id: 2,
        type: "video",
        url: "videos/video1.mp4",
        title: "فيديو رائع",
        views: 0,
        likes: 0
    }
];

// عرض المحتوى في الصفحة
function displayMedia() {
    const gallery = document.getElementById('gallery');
    mediaData.forEach(item => {
        gallery.innerHTML += `
            <div class="media-item">
                <h3>${item.title}</h3>
                ${item.type === 'image' 
                    ? `<a href="${item.url}" data-lightbox="gallery"><img src="${item.url}"></a>`
                    : `<video controls><source src="${item.url}" type="video/mp4"></video>`
                }
                <p>المشاهدات: <span id="views-${item.id}">${item.views}</span></p>
                <button onclick="likeMedia(${item.id})">إعجاب (<span id="likes-${item.id}">${item.likes}</span>)</button>
            </div>
        `;
    });
}

// زيادة الإعجابات (تخزين محلي)
function likeMedia(id) {
    const item = mediaData.find(item => item.id === id);
    item.likes++;
    document.getElementById(`likes-${id}`).textContent = item.likes;
    localStorage.setItem('mediaData', JSON.stringify(mediaData));
}

// زيادة المشاهدات (عند تحميل الصفحة)
window.onload = () => {
    displayMedia();
    mediaData.forEach(item => {
        item.views++;
        document.getElementById(`views-${item.id}`).textContent = item.views;
    });
};