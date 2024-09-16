// https://learn.javascript.ru/task/sum-to
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) {
// 	if (n == 1) {
// 		return n;
// 	} else {
// 		return n + sumTo(n - 1);
// 	}
// } //recursion

// function sumTo(n) {
// 	let result = 0;
// 	for (let i = 0; i <= n; i++) {
// 		result += i;
// 	}
// 	return result;
// } // loop

// function sumTo(n) {
// 	return ((1 + n) / 2) * n;
// } // formula arif prog

alert(sumTo(100)); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему? fastest formula, slowest recursion

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)? no, perepolnitsya stack
