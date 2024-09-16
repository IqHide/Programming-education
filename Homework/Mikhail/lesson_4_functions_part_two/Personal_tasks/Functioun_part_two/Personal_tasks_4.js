// Напишите функцию `createLogger` которая возвращает объект с методами `log` и `getLogs`. Метод `log` добавляет сообщение в внутренний массив, а метод `getLogs` возвращает массив всех сообщений. Убедитесь, что метод `log` корректно добавляет сообщения и `getLogs` возвращает их.
function createLogger() {
	let logger = {
		arr: [],
		log(message) {
			return this.arr.push(message);
		},
		getLogs() {
			console.log(this.arr);
		},
	};
	return logger;
}

let test = createLogger();
test.log('pikachu');
test.log(26);
test.log(true);
test.getLogs();
