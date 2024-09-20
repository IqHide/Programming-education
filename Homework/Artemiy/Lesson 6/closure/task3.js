function makeCounter() {
	let count = 0;

	return function () {
		return count++;
	};
}

let counter = makeCounter(); // Создается предпосылка для первого лексическое окружение для makeCounter
let counter2 = makeCounter(); // А тут уже другое лексическое окружение

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // Выведется 0 и 1, так как эта вложенная функция ссылается на другое внешнее лексическое окружение
console.log(counter2()); // ?

//Выведется 1 и 2
