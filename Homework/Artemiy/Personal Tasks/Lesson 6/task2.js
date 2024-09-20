function makeCounter() {
	let count = 0;
	return {
		increment() {
			++count;
		},
		getCount() {
			return count;
		},
	};
}

//Вопрос: Вариант вместо переменной count использовать свойство объекта count

const counter = makeCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.increment();
counter.increment();
console.log(counter.getCount());
