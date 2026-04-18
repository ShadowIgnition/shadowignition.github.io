// ========== CONFIGURATION ==========
const QUOTATIONS = [
    'Etch out a future of your own design',
];

const WELCOME_TEXT = "Welcome";
const WELCOME_BACK_TEXT = "Welcome back, friend";
const DARK_MODE_ON_TEXT = "Dark Mode Activated";
const DARK_MODE_OFF_TEXT = "Dark Mode Deactivated";

const PREFIX = "> ";
const SUFFIX = "";
const TYPING_SPEED = 50;
const DARK_MODE_TIMEOUT = 2500;
const RETURN_TO_QUOTE_DELAY = 3000;

// ========== STATE VARIABLES ==========
let currentQuote = "";
let fullDisplayText = "";
let typingIndex = 0;
let quoteTimeoutId;
let notifyTimeoutId;
let currentQuoteIndex = -1;
let postTypingCallback = null;

// ========== DOM HELPER ==========
function getQuotesElement() {
    const el = document.getElementById("quotes");
    if (!el) {
        console.warn('Element with id="quotes" not found.');
        return null;
    }
    return el;
}

// ========== QUOTE SELECTION ==========
function getRandomQuote() {
    if (QUOTATIONS.length === 0) {
        console.warn("No quotes available.");
        return "";
    }
    currentQuoteIndex = (currentQuoteIndex + 1) % QUOTATIONS.length;
    return QUOTATIONS[currentQuoteIndex];
}

// ========== TYPING EFFECT ==========
function typeQuote() {
    const el = getQuotesElement();
    if (!el) return;

    if (typingIndex < fullDisplayText.length) {
        el.innerHTML += fullDisplayText.charAt(typingIndex);
        typingIndex++;
        quoteTimeoutId = setTimeout(typeQuote, TYPING_SPEED);
    } else {
        if (postTypingCallback) {
            postTypingCallback();
            postTypingCallback = null;
        }
    }
}

// ========== HELPERS ==========
function resetDisplay() {
    clearTimeouts();
    typingIndex = 0;
    postTypingCallback = null;

    const el = getQuotesElement();
    if (el) el.innerHTML = "";
}

function clearTimeouts() {
    clearTimeout(quoteTimeoutId);
    clearTimeout(notifyTimeoutId);
}

function formatDisplayText(text) {
    return `${PREFIX}${text}${SUFFIX}`;
}

// ========== DELAY LOGIC ==========
function returnToQuoteAfterDelay(delay) {
    postTypingCallback = () => {
        notifyTimeoutId = setTimeout(() => {
            speakQuote();
        }, delay);
    };
}

// ========== MAIN FUNCTIONS ==========
function speakQuote() {
    resetDisplay();

    currentQuote = getRandomQuote();
    fullDisplayText = formatDisplayText(currentQuote);

    typeQuote();
}

function speakWelcome() {
    resetDisplay();

    if (localStorage.getItem("returnVisit") === "true") {
        currentQuote = WELCOME_BACK_TEXT;
    } else {
        localStorage.setItem("returnVisit", "true");
        currentQuote = WELCOME_TEXT;
    }

    fullDisplayText = formatDisplayText(currentQuote);

    returnToQuoteAfterDelay(RETURN_TO_QUOTE_DELAY);
    typeQuote();
}

function speakDarkmode() {
    resetDisplay();

    const isDarkMode = localStorage.getItem("theme") === "theme-dark";

    fullDisplayText = formatDisplayText(
        isDarkMode ? DARK_MODE_ON_TEXT : DARK_MODE_OFF_TEXT
    );

    returnToQuoteAfterDelay(DARK_MODE_TIMEOUT);
    typeQuote();
}

// ========== GENERIC ==========
function speakTemporaryMessage(text, delay = RETURN_TO_QUOTE_DELAY) {
    if (!text) return;

    resetDisplay();
    fullDisplayText = formatDisplayText(text);

    returnToQuoteAfterDelay(delay);
    typeQuote();
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
    if (!getQuotesElement()) return; // stop if element missing
    speakWelcome();
});