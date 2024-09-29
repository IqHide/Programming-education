// https://learn.javascript.ru/task/closure-variable-access
// Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. Эта новая функция может быть вызвана из другого места.

// Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?

function makeWorker() {
	let name = 'Pete';

	return function () {
		alert(name);
	};
}

let name = 'John';

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // что будет показано?
// Какое значение будет показано? «Pete» или «John»? Pete
