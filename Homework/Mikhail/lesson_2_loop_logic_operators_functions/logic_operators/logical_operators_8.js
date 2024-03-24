// https://learn.javascript.ru/task/check-if-out-range
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
let age = prompt('vvedi vozrast')
// if (age < 14 || age > 90) {
// 	alert('vse ok')
// } else {
// 	alert('vne diapozona')
// }

if (!(age >= 14 && age <= 90)) {
	alert('vse ok')
} else {
	alert('vne diapozona')
}
