// https://learn.javascript.ru/task/check-if-out-range
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age = prompt('vvedi age');
// if (age > 90 || age < 14) {
// 	alert('vse ok');
// } else {
// 	alert('ne vse ok');
// }

let age = prompt('vvedi age');
if (!(age >= 14 && age <= 90)) {
	alert('vse ok');
} else {
	alert('ne vse ok');
}
