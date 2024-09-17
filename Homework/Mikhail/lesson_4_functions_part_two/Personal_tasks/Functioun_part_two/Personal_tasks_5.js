//  Создайте два объекта с методами `getName` и `getAge`. Метод `getName` должен возвращать имя из объекта, а метод `getAge` возвращать возраст. Создайте функцию `getPersonInfo` которая использует метод `call`, чтобы получить имя и возраст из двух разных объектов и вернуть строку с информацией о человеке.
let name = {
	name: 'krykva',
	getName: function () {
		return this.name;
	},
};

let age = {
	age: 3,
	getAge: function () {
		return this.age;
	},
};

function getPersonInfo() {
	return name.getName.call(name) + ' ' + age.getAge.call(age);
}

console.log(getPersonInfo());
