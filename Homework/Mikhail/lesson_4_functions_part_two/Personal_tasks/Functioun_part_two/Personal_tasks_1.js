// Создайте объект `person` с методом `introduce` который возвращает строку с именем и возрастом. Вызовите этот метод и выведите результат в консоль.

let person = {
	name: 'Mikhail',
	age: 26,
	introduce() {
		return console.log(this.name + ', ' + this.age);
	},
};
person.introduce();
