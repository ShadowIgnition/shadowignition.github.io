// ========== CONFIGURATION ==========
const QUOTATIONS = [
    'Hello world...',
    'Lost in time, like tears in rain',
    'Better die than to rust',
    'Etch out a future of your own design',
    'The infomation wants to be free',
    'Lost in the datastream?',
    'Hold The Future',
    'Virtualize Visions',
    'Transmit Data',
    'Manifold Love',
    'Command Binary',
];

const WELCOME_TEXT = "Welcome";
const WELCOME_BACK_TEXT = "Welcome back, friend";
const DARK_MODE_ON_TEXT = "Dark Mode Activated";
const DARK_MODE_OFF_TEXT = "Dark Mode Deactivated";
const INTERACTABLES_TEXT = "Highlighting Interactable Elements";

const PREFIX = "> ";
const SUFFIX = "";
const TYPING_SPEED = 50;
const DARK_MODE_TIMEOUT = 2500;

// ========== STATE VARIABLES ==========
let currentQuote = "";
let fullDisplayText = "";
let typingIndex = 0;
let quoteTimeoutId;
let notifyTimeoutId;
let currentQuoteIndex = -1; // Start before first quote

// ========== QUOTE SELECTION LOGIC ==========
function getRandomQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % QUOTATIONS.length;
    return QUOTATIONS[currentQuoteIndex];
}

// ========== TYPING EFFECT ==========
function typeQuote() {
    if (typingIndex < fullDisplayText.length) {
        document.getElementById("quotes").innerHTML += fullDisplayText.charAt(typingIndex);
        typingIndex++;
        quoteTimeoutId = setTimeout(typeQuote, TYPING_SPEED);
    }
}

// ========== NOTIFICATIONS ==========
function speakWelcome() {
    if (localStorage.getItem("returnVisit") === "true") {
        currentQuote = WELCOME_BACK_TEXT;
    } else {
        localStorage.setItem("returnVisit", "true");
        currentQuote = WELCOME_TEXT;
    }
    fullDisplayText = formatDisplayText(currentQuote);
    typeQuote();
}

function speakQuote() {
    resetDisplay();
    currentQuote = getRandomQuote();
    fullDisplayText = formatDisplayText(currentQuote);
    typeQuote();
}

function speakDarkmode() {
    resetDisplay();
    const isDarkMode = localStorage.getItem("theme") === "theme-dark";
    fullDisplayText = formatDisplayText(isDarkMode ? DARK_MODE_ON_TEXT : DARK_MODE_OFF_TEXT);
    typeQuote();
    notifyTimeoutId = setTimeout(notifyVanillaText, DARK_MODE_TIMEOUT);
}

// ========== HELPERS ==========
function resetDisplay() {
    clearTimeouts();
    typingIndex = 0;
    document.getElementById("quotes").innerHTML = "";
}

function clearTimeouts() {
    clearTimeout(quoteTimeoutId);
    clearTimeout(notifyTimeoutId);
}

function formatDisplayText(text) {
    return `${PREFIX}${text}${SUFFIX}`;
}
