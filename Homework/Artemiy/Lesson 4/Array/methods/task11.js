let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
	let sum = 0;
	arr.forEach(element => {
		sum += element.age;
	});
	console.log(sum);
	return sum / arr.length;
}
console.log(arr.length);
console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// В ответах используется метод reduce. Как он работает? Он позволяет как в цикле обойти все элементы массива и получить на выходе единственное значение, т.е один этот метод объединяет то, что написал я.
