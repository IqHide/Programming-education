// https://learn.javascript.ru/task/check-if-in-range
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
let age = prompt('vvedi vozrast')
// if (14 <= age <= 90) {
// 	alert('vse ok')
// } else {
// 	alert('vne diapozona')
// }
if (age >= 14 && age <= 90) {
	alert('vse ok')
} else {
	alert('vne diapozona')
}
// почему верхний вариант не работает?
