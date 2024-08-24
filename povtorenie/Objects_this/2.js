// https://learn.javascript.ru/task/calculator
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
	// ... ваш код ...
	a: null,
	b: null,
	c: null,
	d: null,
	read() {
		this.a = +prompt('a');
		this.b = +prompt('b');
	},
	sum() {
		this.c = this.a + this.b;
		alert(this.c);
	},
	mul() {
		this.d = this.a * this.b;
		alert(this.d);
	},
};

calculator.read();
calculator.sum();
calculator.mul();

// let calculator = {
// 	sum() {
// 		return this.a + this.b;
// 	},

// 	mul() {
// 		return this.a * this.b;
// 	},

// 	read() {
// 		this.a = +prompt('a?', 0);
// 		this.b = +prompt('b?', 0);
// 	},
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
