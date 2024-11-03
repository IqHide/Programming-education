// Создайте объект animal с методом makeSound. Затем создайте объект dog, который наследует от animal и переопределяет метод makeSound, чтобы он выводил "Woof!". Проверьте, что метод makeSound работает как ожидается для обоих объектов.
let animal = {
	sound: 'animal sound',
	makeSound() {
		console.log(`${this.sound}`);
	},
};

let dog = {
	__proto__: animal,
	sound: 'Woof!',
};

animal.makeSound();
dog.makeSound();
