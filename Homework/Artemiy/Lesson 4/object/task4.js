//У нас есть объект, в котором хранятся зарплаты нашей команды:
//Если объект salaries пуст, то результат должен быть 0.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function calcSalary(obj) {
	let sum = 0;
	for (key in obj) {
		sum += obj[key];
	}
	return sum;
}

console.log(calcSalary(salaries));
