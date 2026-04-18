var container;
var buttons;
var lightbox;
function initialize() {
    container = document.getElementById('content');
    buttons = document.querySelectorAll('nav.toggleTheme button');
    lightbox = document.getElementById('lightbox');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            loadSection(btn.dataset.section);
        });
    });
}

function loadSection(section) {
    // Fade out current content first
    container.classList.remove('show');

    // Wait for fade-out to complete (match CSS transition duration)
    setTimeout(() => {
        fetch(section + '.html')
            .then(res => {
                if (!res.ok) throw new Error('HTTP error ' + res.status);
                return res.text();
            })
            .then(html => {
                container.innerHTML = html;      // replace content
                container.classList.add('show'); // fade in new content

                // Update active button
                buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === section));
            })
            .catch(err => console.error(err));
    }, 300); // matches CSS fade duration (0.3s)
}



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    var currentSection = "aboutme";

async function openSection(evt, sectionName) {
    var i, containers, tablinks;

    if (currentSection == sectionName) {
        return;
    }

    containers = document.getElementsByClassName("section-content");

    // Fade out all visible containers
    for (i = 0; i < containers.length; i++) {
        if (!containers[i].hidden) {
            containers[i].classList.add("fade-out");
        }
    }

    // Wait for fade-out to finish
    await wait(300);

    // Hide all containers
    for (i = 0; i < containers.length; i++) {
        containers[i].hidden = true;
    }

    // Remove active class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show selected container
    const current = document.getElementById(sectionName);
    currentSection = sectionName;
    current.hidden = false;

    // Start from invisible
    current.classList.add("fade-out");

    // Small delay so browser registers state
    await wait(10);

    // Fade in
    current.classList.remove("fade-out");
}


function openLightbox(src) {
    const img = lightbox.querySelector('img');
    img.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

const contactForm = document.getElementById('contact-form');

function openContactForm() {
    contactForm.classList.add('active');
}

function closeContactForm() {
    contactForm.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    initialize();
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openMenu() {
  var x = document.getElementById("myLinks");
  x.classList.toggle("open");
}