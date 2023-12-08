// https://learn.javascript.ru/task/min
// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
let a = prompt('a', '')
let b = prompt('b', '')
function min(a, b) {
	return a < b ? Number(a) : Number(b)
	// if (Number(a) < Number(b)) {
	// 	return a
	// } else {
	// 	return b
	// }
}
alert(min(a, b))
