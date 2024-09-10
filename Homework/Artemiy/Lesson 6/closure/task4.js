function Counter() {
	let count = 0;

	this.up = function () {
		return ++count;
	};
	this.down = function () {
		return --count;
	};
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1

//Ответ: тут все идентично. Конструктор создает внешнее лексическое окружение
