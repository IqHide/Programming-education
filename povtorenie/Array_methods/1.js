// https://learn.javascript.ru/task/camelcase
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
function camelize(str) {
	let arr = str.split('-');
	let result = arr.map((item, index) =>
		index === 0 ? item : item[0].toUpperCase() + item.slice(1)
	);
	// result.splice(1, 1);
	result = result.join('');
	// result = result.at(0).toLowerCase() + result.slice(1);
	// arr.splice(
	// 	arr.filter(char => char == '-'),
	// 	2,
	// 	arr[arr.filter(char => char == '-') + 1].toUpperCase()
	// );
	// 	let del = arr.filter(char => char == '-');
	// 	let up = +(del + 1);
	// 	return alert(arr.splice(del, 2, arr[up].toUpperCase()));
	return result;
}
