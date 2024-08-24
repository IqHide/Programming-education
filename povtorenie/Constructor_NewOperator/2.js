// https://learn.javascript.ru/task/calculator-constructor
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

function Calculator() {
	// ... ваш код ...
	value = null;
	this.read = function () {
		this.a = +prompt('a');
		this.b = +prompt('b');
	};
	this.sum = function () {
		value = this.a + this.b;
		return value;
	};
	this.mul = function () {
		value = this.a * this.b;
		return value;
	};
}

let calculator = new Calculator();

calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());


более красивый вариант:
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );