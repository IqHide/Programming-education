// https://learn.javascript.ru/task/camelcase
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
// стратегия сенсея:
// 1. Нужно расплитить строку по сепаратору догадайся сам какому, ты получишь массив тогда
// 2. взять массив и замапить его нужным образом. тут будет основная логика. подсказка: обрати внимание, что ты должен обработать первую строку отдельно не так, как последующин
// 3. собрать из массива снова строку (заджоинить )
let str = 'i-do-not-understand-anything';
let arr = str.split('-');
// let camelCase = arr.map((word, index) => {
// 	if (index !== 0) {
// 		return word.charAt(0).toUpperCase() + word.slice(1);
// 	}
// 	return word;
// });
// let camelCaseStr = camelCase.join('');
// alert(camelCaseStr);

function camelize(str) {
	return str
		.split('-')
		.map((word, index) =>
			index == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join('');
}
alert(camelize(str));

// let camelcase = arr.map(
// 	arr.splice(arr.indexOf('-', 0), 2, [arr.indexOf('-', 0) + 1].toUpperCase())
// );
