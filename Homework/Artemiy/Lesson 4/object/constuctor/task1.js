//Возможно ли создать функции A и B, чтобы new A() == new B()?

//Ответ: Да, возможно, но это не имеет смысла. Такое может быть если функции будут возвращать ссылки на один и тот же объект.

let user = {
	name: 'Artem',
};

function A() {
	return user;
}
function B() {
	return user;
}

let a = new A();
let b = new B();

console.log(a == b); // true
