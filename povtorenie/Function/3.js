// https://learn.javascript.ru/task/min
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
	return a < b ? a : b;
}
let a = +prompt('a');
let b = +prompt('b');
// let c = min(a, b);
alert(min(a, b));
