// https://learn.javascript.ru/task/repeat-until-number
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
function readNumber() {
	let a = prompt('vvedi chislo');
	while (!isFinite(a) && !(a == null)) {
		a = prompt('vvedi chislo');
	}
	if (a == null || a == '') return null;
	else return Number(a);
}
readNumber();

// function readNumber() {
// 	let num;

// 	do {
// 		num = prompt('Введите число', 0);
// 	} while (!isFinite(num));

// 	if (num === null || num === '') return null;

// 	return +num;
// }

// alert(`Число: ${readNumber()}`);
