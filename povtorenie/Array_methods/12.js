// https://learn.javascript.ru/task/array-unique
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
	/* ваш код */
	let result = [];
	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}
	return result;
}

let strings = [
	'кришна',
	'кришна',
	'харе',
	'харе',
	'харе',
	'харе',
	'кришна',
	'кришна',
	':-O',
];

alert(unique(strings)); // кришна, харе, :-O
