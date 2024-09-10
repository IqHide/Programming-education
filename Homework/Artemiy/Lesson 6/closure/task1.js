let name = 'John';

function sayHi() {
	console.log('Hi, ' + name);
}

name = 'Pete';

sayHi(); // что будет показано: "John" или "Pete"?

//Функция выведет Pete, так как перед выполнением функции измениться глобальный контекст выполнения
