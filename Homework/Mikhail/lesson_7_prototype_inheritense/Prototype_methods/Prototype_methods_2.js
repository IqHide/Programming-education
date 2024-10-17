// https://learn.javascript.ru/task/compare-calls
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
	this.name = name;
}
Rabbit.prototype.sayHi = function () {
	alert(this.name);
};

let rabbit = new Rabbit('Rabbit');
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // 'Rabbit'
Rabbit.prototype.sayHi(); // undefind
Object.getPrototypeOf(rabbit).sayHi(); //undefind
rabbit.__proto__.sayHi(); //undefind

// В первом вызове this == rabbit, во всех остальных this равен Rabbit.prototype, так как это объект перед точкой.

// Так что только первый вызов выведет Rabbit, а остальные – undefined:
