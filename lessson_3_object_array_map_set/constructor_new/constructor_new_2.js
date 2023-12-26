// https://learn.javascript.ru/task/calculator-constructor
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
function Calculator() {
	this.read = function () {
		this.a = Number(prompt('a', ''));
		this.b = Number(prompt('b', ''));
		return this.a, this.b;
	};
	this.sum = function () {
		return this.a + this.b;
	};
	this.mul = function () {
		return Math.imul(this.a, this.b);
	};
}
let calculator = new Calculator();

//  function Calculator() {
// 	this.read =  read() {
// 		this.a = Number(prompt('a', ''));
// 		this.b = Number(prompt('b', ''));
// 		return this.a, this.b;
// 	},
// 	this.sum =  sum() {
// 		return this.a + this.b;
// 	},
// 	 this.mul =  mul() {
// 		return Math.imul(this.a, this.b);
// 	},
// };
// let calculator = new Calculator()        why didn't work?

calculator.read();
alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());
