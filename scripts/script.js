const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const gallerySlider = document.querySelector('.gallery__slider');
const galleryItem = document.querySelectorAll('.gallery__item');
let position = 0;

arrowRight.addEventListener('click', () => {
    if (position > -640 * (galleryItem.length - 1))
        position -= 640;
    gallerySlider.style.left = position + "px";
})

arrowLeft.addEventListener('click', () => {
    if (position < 0) {
        position += 640;
    gallerySlider.style.left = position + "px";
    }
})


