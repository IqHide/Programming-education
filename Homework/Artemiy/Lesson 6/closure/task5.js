let phrase = 'Hello';

if (true) {
	let user = 'John';

	function sayHi() {
		console.log(`${phrase}, ${user}`);
	}
}

sayHi(); //Мне выводит Hello, John

//Чисто в теории функция инициализируется внутри блока кода. Будь это переменная или функция expression, то был бы либо undefined, либо ошибка. Однако у нас функция Declaration, поэтому мне кажется все прекрасно выведется
