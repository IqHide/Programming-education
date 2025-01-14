//learn.javascript.ru/task/rewrite-to-class
// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.
class Clock {
	constructor({ template }) {
		this.template = template;
		this.timer = null;
	}

	render() {
		const date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		const output = this.template
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

const clock = new Clock({ template: 'h:m:s' });
clock.start();
