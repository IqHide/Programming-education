function tudaSudaObratno(num1, num2, str) {
	if (!isFinite(num1) || !isFinite(num1) || typeof str !== 'string') {
		console.log('Переданы неправильные типы данных')
		return
	}
	let sum = +num1 + +num2

	if (sum > 3) {
		returnObj(num1, num2, str)
	}
	if (sum < 3) {
		reduceToNumber(sum, num1, num2, str)
	} else {
		console.log('Я вернулся!')
		return {
			artem: 19,
		}
	}
}

function reduceToNumber(sum, num1, num2, str) {
	while (sum !== 3) {
		sum++
	}
	returnObj(num1, num2, str)
}

function returnObj(num1, num2, str) {
	console.log(`Вернулся объект с ключом ${str} и значением ${num1 * num2}`)
	return {
		[str]: num1 * num2,
	}
}

tudaSudaObratno(1, 2, 'ahahaha')
//ломать и вынести декомпозицию
