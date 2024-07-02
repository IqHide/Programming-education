function Calculator() {
	this.calculate = function (str) {
		let arr = str.split(' ');
		return this.operators[arr[1]](+arr[0], +arr[2]);
	};
	this.operators = {
		'-': (a, b) => a - b,
		'+': (a, b) => a + b,
	};
	this.addMethod = function (name, func) {
		this.operators[name] = func;
	};
}

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result); // 8
