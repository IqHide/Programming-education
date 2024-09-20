function printNumber(from, to) {
	let timeId = setInterval(() => {
		console.log(from);
		if (from === to) {
			clearInterval(timeId);
		}
		from++;
	}, 1000);
}

//printNumber(2, 5);

function printNumberWithTimeout(from, to) {
	let next = () => {
		console.log(from);
		if (from < to) {
			setTimeout(next, 1000);
		}
		from++;
	};
	//next();
	setTimeout(next, 1000);
}

printNumberWithTimeout(2, 10);
