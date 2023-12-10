// https://learn.javascript.ru/task/is-empty
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let result
// function isEmpty(obj) {
// 	for (let key in obj) {
// 		result = key
// 	}
// 	alert(result)
// 	return result
// }
// isEmpty(obj)
// alert(Boolean(isEmpty(obj)))
// delete obj.name
// isEmpty(obj)
// alert(Boolean(isEmpty(obj)))

let obj = {}
obj.name = 'Misha'
function isEmpty(obj) {
	for (result in obj) {
		return false
	}
	return true
}
alert(isEmpty(obj))
delete obj.name
alert(isEmpty(obj))
