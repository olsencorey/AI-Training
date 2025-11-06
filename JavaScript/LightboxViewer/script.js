const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// set display property to flex to make elements visible + set lightbox image to full-size image
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    lightbox.style.display = 'flex';
    const fullImgSrc = item.src.replace('-thumbnail','');
    lightboxImage.src = fullImgSrc;
  });
});

// Hide lightbox on close button or clicking the background
function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxImage.src = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) closeLightbox();
});
