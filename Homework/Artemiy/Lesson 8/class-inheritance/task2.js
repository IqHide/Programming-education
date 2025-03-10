class Clock {
	constructor({ template }) {
		this.template = template;
	}

	render() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}
//(node:41112) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
//(Use `node --trace-warnings ...` to show where the warning was created)

//Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
//import { Clock } from './clock.js';

class ExtendedClock extends Clock {
	constructor(template) {
		super(template);
		let { precision = 1000 } = template;
		this.precision = precision;
	}
}
