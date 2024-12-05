// Butonlar ve pop-up elemanlarını seç
const buttons = document.querySelectorAll('.media-button');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupVideo = document.getElementById('popup-video');
const closeBtn = document.querySelector('.close-btn');

// Medya dosyalarının yolları
const mediaFiles = {
    media1: { type: 'image', src: 'image1.jpg' },
    media2: { type: 'image', src: 'image2.jpg' },
    media3: { type: 'image', src: 'image3.jpg' },
    media4: { type: 'image', src: 'image4.jpg' },
    media5: { type: 'image', src: 'image5.jpg' },
    media6: { type: 'video', src: 'video.mp4' },
};

// Her butona tıklama olayı ekle
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const media = mediaFiles[target];

        if (media.type === 'image') {
            popupImage.src = media.src;
            popupImage.style.display = 'block';
            popupVideo.style.display = 'none';
        } else if (media.type === 'video') {
            popupVideo.src = media.src;
            popupVideo.style.display = 'block';
            popupImage.style.display = 'none';
        }

        popup.style.display = 'flex';
    });
});

// Pop-up kapatma olayı
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popupImage.src = '';
    popupVideo.src = '';
});

// Pop-up dışına tıklanırsa kapatma
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
        popupImage.src = '';
        popupVideo.src = '';
    }
});
