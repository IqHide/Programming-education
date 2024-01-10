// https://learn.javascript.ru/task/two-functions-one-object
// Возможно ли создать функции A и B, чтобы new A() == new B()?
let obj = {}; // my code
function A() {
	return obj;
}
function B() {
	return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true
// Если да – приведите пример вашего кода.
