// Создайте конструктор Person с методом greet. Затем создайте конструктор Student, который наследует от Person и добавляет метод study. Проверьте, что метод greet доступен для Student, и добавьте вызов метода study для Student.
function Person(name) {
	this.name = name;
}

Person.prototype.greet = function () {
	console.log(`Hello, ${this.name}!`);
};

function Student(name) {
	Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
	console.log(`${this.name} is studying`);
};

let student = new Student('John');
student.greet();
student.study();
