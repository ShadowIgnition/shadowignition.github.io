function updateClock() {
	const now = new Date();

	const time = now.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	const offsetMinutes = -now.getTimezoneOffset();
	const sign = offsetMinutes >= 0 ? "+" : "-";
	const hours = String(Math.floor(Math.abs(offsetMinutes) / 60)).padStart(2, "0");
	const minutes = String(Math.abs(offsetMinutes) % 60).padStart(2, "0");
    const el = document.getElementById("clock");
if (el) {
	el.textContent = `${time} (UTC ${sign}${hours}:${minutes})`;
}
	setInterval(updateClock, 10000);
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
	if (!getTimeElement()) return; // stop if element missing
	updateClock();
});

// ========== DOM HELPER ==========
function getTimeElement() {
	const el = document.getElementById("clock");
	if (!el) {
		console.warn('Element with id="clock" not found.');
		return null;
	}
	return el;
}
