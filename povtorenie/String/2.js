// https://learn.javascript.ru/task/check-spam
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true;
checkSpam('free xxxxx') == true;
checkSpam('innocent rabbit') == false;

function checkSpam(str) {
	let lowerCase = str.toLowerCase();
	return lowerCase.includes('xxx') || lowerCase.includes('viagra');

	// return str.toLowerCase().includes('viagra' || 'xxx') ? true : false;
}
