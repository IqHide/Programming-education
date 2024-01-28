// https://learn.javascript.ru/task/calculator
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
	read() {
		this.a = Number(prompt('a', ''));
		this.b = Number(prompt('a', ''));
		return this.a, this.b;
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return Math.imul(this.a, this.b);
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
