function createLogger() {
	const arrayMessage = [];
	return {
		log(newMessage) {
			arrayMessage.push(newMessage);
			console.log('Выполнено добавление в массив!');
		},
		getLogs() {
			arrayMessage.forEach(item => console.log(item));
		},
	};
}

const logger = createLogger();
logger.log('Все хорошо!');
logger.log('Сижу на паре по химии');
logger.log('ьлал');
logger.getLogs();
