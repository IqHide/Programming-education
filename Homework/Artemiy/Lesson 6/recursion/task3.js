function fib(n) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function fibOptimization(n) {
	let a = 1;
	let b = 1;
	let c = 0;
	for (i = 3; i < n; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}

console.log(fib(7));
console.log(fibOptimization(7));
