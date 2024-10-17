// Создайте функцию extendObject для динамического добавления методов в объект, который наследует от другого объекта. Проверьте, что добавленные методы правильно работают, и все свойства от базового объекта сохраняются.
class Animal {
	constructor(name) {
		this.name = name;
		this.speed = 0;
	}

	move(speed) {
		this.speed = speed;
		console.log(`${this.name} двигается со скоростью ${this.speed}.`);
	}
}

class Bird extends Animal {
	fly() {
		console.log(`${this.name} летает!`);
	}
}

class Sparrow extends Bird {}

function extendObject(obj, methods) {
	for (const [methodName, methodFunction] of Object.entries(methods)) {
		obj[methodName] = methodFunction;
	}
}

let sparrow = new Sparrow('Воробей Серёга');

extendObject(sparrow, {
	sing: function () {
		console.log(`${this.name} поет!`);
	},
	dance: function () {
		console.log(`${this.name} танцует!`);
	},
});

sparrow.move(15);
sparrow.fly();
sparrow.sing();
sparrow.dance();
