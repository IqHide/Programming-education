// https://learn.javascript.ru/task/function-in-if
// Посмотрите на код. Какой будет результат у вызова на последней строке?

// Обратите внимание: результат зависит от режима выполнения кода. Здесь используется строгий режим "use strict".

let phrase = 'Hello';

if (true) {
	let user = 'John';

	function sayHi() {
		alert(`${phrase}, ${user}`);
	}
}

sayHi(); // error
