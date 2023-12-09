// https://learn.javascript.ru/task/check-spam
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
let str
function checkSpam(str) {
	let lowerStr = str.toLowerCase()

	return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}
alert(checkSpam(prompt('')))
