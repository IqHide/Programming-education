// https://learn.javascript.ru/task/two-functions-one-object
// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// да, если они будут ссылаться на один и тот же объект

let john = {
	name: 'john',
};

function A() {
	return john;
}
function B() {
	return john;
}

let a = new A();
let b = new B();

alert(a == b); // true
