function debounce(func, ms) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setInterval(() => func.apply(this, args), ms);
	};
}
