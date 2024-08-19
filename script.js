// script.js

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const moviesGrid = document.querySelector('.movies-grid');

prevButton.addEventListener('click', () => {
    moviesGrid.scrollLeft -= 300; // Adjust scroll distance
});

nextButton.addEventListener('click', () => {
    moviesGrid.scrollLeft += 300; // Adjust scroll distance
});
