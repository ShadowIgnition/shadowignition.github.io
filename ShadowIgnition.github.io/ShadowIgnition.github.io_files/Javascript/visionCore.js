function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}
(function () {
	//console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-dark');
	} else {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}
	}
})();
/*
var r = document.querySelector(':root');
function setInteractive(isInteractive) {
	localStorage.setItem('isInteractive', isInteractive);
	r.style.setProperty('--interactiveBorderImg', '--interBorderTuppleImg');
}
function toggleInteractive() {
	if (localStorage.getItem('isInteractive') === '--interBorderTuppleImg') {
		setInteractive('--containerBorderImg');
	} else {
		setInteractive('--interBorderTuppleImg');
	}
	console.log(localStorage.getItem('isInteractive'));
}

(function () {//On Page Load
	if (localStorage.getItem('isInteractive') === '--interBorderTuppleImg') {
		setInteractive('--interBorderTuppleImg');
	} else {
		setInteractive('--interactiveBorder');
	}
})();
*/