function getSimpleNumber(n) {
	for (let num = 1; num < n + 1; num++) {
		if (checkOnSimple(num)) {
			console.log(num);
		}
	}
}

function checkOnSimple(num) {
	for (let del = 2; del < num; del++) {
		if (num % del == 0) {
			return false;
		}
	}
	return true;
}

getSimpleNumber(100);
