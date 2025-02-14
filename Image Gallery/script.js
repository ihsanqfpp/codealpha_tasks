let currentIndex = 0;
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    currentIndex = n - 1;
    showSlide(currentIndex);
}

function changeSlide(n) {
    currentIndex += n;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showSlide(currentIndex);
}

function showSlide(index) {
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = images[index];
    lightboxImage.alt = `Image ${index + 1}`;
}

// Initialize the lightbox with the first image
document.addEventListener("DOMContentLoaded", function() {
    showSlide(currentIndex);
});