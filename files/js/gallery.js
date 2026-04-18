// Slideshow
let slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n)
{
    let slides = document.getElementsByClassName("gallery-item");
    slideIndex = ((n % slides.length) + slides.length) % slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "flex";
}