// locomotive js

document.addEventListener('DOMContentLoaded', function () {
    const locomotive = new Locomotive({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,  // Example configuration option
        // Add other configuration options as needed
    });
    locomotive.init();
});

// locomotive js end 

// JavaScript to handle loading states

document.body.classList.add('loading');

window.addEventListener('load', function () {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});


function redirectToCategory(categoryName, categoryPage) {

    window.location.href = categoryPage;
}

// image slider

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = slide.length;
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000);

// image slider end