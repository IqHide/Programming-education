const person = {
	name: 'Artem',
	age: 19,
	introduce() {
		return `${this.name}, которому ${this.age} лет`;
	},
};

console.log(person.introduce());
