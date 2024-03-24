// https://learn.javascript.ru/task/random-int-min-max
function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}

alert(randomInteger(1, 3))
// логика не ясна
