// https://learn.javascript.ru/task/truncate
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

alert(truncate('Всем привет!', 20));

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return (str = str.slice(0, maxlength - 1) + '…');
	} else return str;
}
// function truncate(str, maxlength) {
// 	return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
// }
