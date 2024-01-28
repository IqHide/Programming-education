// https://learn.javascript.ru/task/copy-sort-array
// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ['HTML', 'JavaScript', 'CSS'];

// function copySorted(arr) {
// 	let copy = arr.concat();
// 	copy.sort((a, b) => b.localeCompare(a)).reverse();
// 	return copy;
// }
function copySorted(arr) {
	let copy = arr.slice().sort();
	return copy;
}

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)
