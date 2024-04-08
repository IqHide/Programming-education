// ToDo: Создайте функцию, которая будет принимать два числа и строку. Если сумма чисел больше 3, то функцию будет возвращать объект с ключом  в виде строки из параметров, а значением будет произведение чисел. Если значенеи меньше 3, то запустить цикл с этим числом до момента, пока число не будет равно трем, а потом обработать его как если оно равно трем. Если число равно трем, то верни объект с ключом состоящим из твоего имени, а значением будет твой возраст

// Дополнительное задание:
// 1. Ломаем код. Обработать ошибки.
// 2. Декомпозировать задачу. Сделать несколько функций.

function someFunction(num1, num2, str) {
	if (!checkNumberType(num1, num2)) {
		throw new Error('Херня, переделывай!!!!!!')
	}

	sum = Math.floor(num1 + num2)

	if (sum > 3) {
		let resultObject = {}
		resultObject[str] = num1 * num2
		return resultObject
	}

	while (sum <= 3) {
		sum += 1
	}
	return makeObjectPerson('Ilya', 20)
}

function makeObjectPerson(name, age) {
	return (person = {
		name: name,
		age: age,
	})
}

function checkNumberType(num1, num2) {
	return !isNaN(Number(num1)) && !isNaN(Number(num2))
}

// Пример вызова
console.log(someFunction(89, 44, 'gachiPower'))
