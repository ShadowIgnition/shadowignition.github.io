// Slideshow
let slideIndex = 0;
let autoplaying = true;

// Next/previous controls
function plusSlides(n) {
    autoplaying = false;
    showSlides(slideIndex += n);
}

function autoplay() {
    if (!autoplaying) {
        return;
    }
    showSlides(slideIndex += 1);
    setTimeout(autoplay, 3000);
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