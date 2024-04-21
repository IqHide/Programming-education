let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

function multiplyNumeric(obj) {
	if (typeof obj != 'object') {
		console.log('Неправильный аргумент!');
		return;
	}

	for (key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}
	// если объект пустой, то код перепрыгивает вот сюда
}
