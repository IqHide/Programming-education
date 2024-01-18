// https://learn.javascript.ru/task/array-unique
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
	// let i = 0;
	// arr.sort(arr[i] == arr[++i]) ? delete arr[i] : i++))

	return [...new Set(arr)];

	/* ваш код */
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
