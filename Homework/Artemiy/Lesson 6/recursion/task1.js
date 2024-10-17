function sumToRecursion(n) {
	if (n == 0) {
		return n;
	}
	return n + sumToRecursion(n - 1);
}

function sumToFor(n) {
	for (let i = n - 1; i > 0; i--) {
		n += i;
	}
	return n;
}

function sumToProgressia(n) {
	return ((1 + n) * n) / 2;
}

console.log(sumToProgressia(10));
console.log(sumToFor(10));
console.log(sumToRecursion(10));

//Очевидно, что быстрее всего решать по формуле, так как это всего 3 операции. Второй по скорости будет цикл. Тут операций столько же сколько и в рекурсии, но не тратиться ресурсов на создания контекстом выполнения.
