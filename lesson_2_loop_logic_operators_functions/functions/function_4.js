// https://learn.javascript.ru/task/pow
// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Запустить демо

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
// let x = prompt('x', '')
// let n = prompt('n', '')

// function pow(x, n) {
// 	n = Math.round(n)
// 	return Number(x) ** Number(n)
// }
// alert(pow(x, n))

let x = prompt('x', '');
let n = prompt('n', '');

function pow(x, n) {
	n = Math.round(n);
	return Math.pow(x, n);
}
alert(pow(x, n));
