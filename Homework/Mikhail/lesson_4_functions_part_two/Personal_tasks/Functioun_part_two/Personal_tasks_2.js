// Напишите функцию `makeCounter` которая возвращает объект с методами `increment` и `getCount`. Метод `increment` увеличивает счётчик на 1, а `getCount` возвращает текущее значение счётчика. Проверьте, что счётчик работает правильно.
function makeCounter() {
	let obj = {
		i: 0,
		increment() {
			return this.i++;
		},
		getCount() {
			console.log(this.i);
		},
	};
	return obj;
}
let counter = makeCounter();
counter.getCount();
counter.increment();
counter.getCount();
counter.increment();
counter.getCount();
