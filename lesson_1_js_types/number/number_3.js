// https://learn.javascript.ru/task/repeat-until-number
function readNumber() {
	let num

	do {
		num = prompt('Введите число', 0)
	} while (!isFinite(num)) //dlya chego eta stroka? i chto budet esli infinite

	if (num === null || num === '') return null

	return +num
}

alert(`Число: ${readNumber()}`)
// проблемы из-за того, что я перескочил какой-то урок? Я сам не смог решить.
