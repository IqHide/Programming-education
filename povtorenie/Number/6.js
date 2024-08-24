// https://learn.javascript.ru/task/random-int-min-max

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5

// Есть много правильных решений этой задачи. Одно из них – использовать Math.floor для получения случайного числа от min до max+1.:

function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

alert(randomInteger(1, 3));

// не решил.
