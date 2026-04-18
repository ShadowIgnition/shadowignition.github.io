function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') === 'theme-dark' ? 'theme-light' : 'theme-dark';
    setTheme(currentTheme);
}

(function initializeTheme() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();