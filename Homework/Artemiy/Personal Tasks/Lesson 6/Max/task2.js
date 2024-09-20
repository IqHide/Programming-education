const someone = {
	name: 'Diana',
	age: 21,
	getName() {
		return this.name;
	},
	getAge() {
		return this.age;
	},
};

const me = {
	name: 'Artem',
	age: 20,
	getName() {
		return this.name;
	},
	getAge() {
		return this.age;
	},
};
//Реализация 1
function getPersonInfo(obj) {
	return obj.getName.call(obj) + ' ' + obj.getAge.call(obj);
}
//Я не понимаю зачем нужен тут call. Все прекрасно работает без него. Как я понимаю проблема в том, что я тут вызываю необходимые функции, как методы(уже с явно закрепленным this), т.е call нужен для методов, которые вызываются, как обычные функции. Зачем же call тут?

console.log(getPersonInfo(me));
console.log(getPersonInfo(someone));

//Реализация 2
function getPersonInfoTwo(...objs) {
	for (let obj of objs) {
		console.log(obj.getName.call(obj) + ' ' + obj.getAge.call(obj));
	}
}
