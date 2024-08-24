// https://learn.javascript.ru/task/array-input-sum
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
	let arr = [];
	let elem;
	let sum = 0;

	while (true) {
		elem = prompt('Введите число', 0);
		if (elem === null || elem === '' || isNaN(elem)) break;
		arr.push(+elem);
	}

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	alert(sum);
}

sumInput();

// function sumInput() {
// 	let numbers = [];

// 	while (true) {
// 		let value = prompt('Введите число', 0);

// 		// Прекращаем ввод?
// 		if (value === '' || value === null || !isFinite(value)) break;

// 		numbers.push(+value);
// 	}

// 	let sum = 0;
// 	for (let number of numbers) {
// 		sum += number;
// 	}
// 	return sum;
// }

// alert(sumInput());
