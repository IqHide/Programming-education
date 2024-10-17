// Создайте иерархию классов Animal, Bird и Sparrow, где Sparrow наследует от Bird, а Bird наследует от Animal. Убедитесь, что каждый класс имеет свой метод и правильно наследуется. Проверьте, что методы и свойства доступны на всех уровнях иерархии.
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

let sparrow = new Sparrow('Воробей Серёга');
sparrow.move(15);
sparrow.fly();
