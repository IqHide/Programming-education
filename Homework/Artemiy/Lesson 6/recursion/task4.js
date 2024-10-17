let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

function printListRound(list) {
	console.log('Через цикл!');
	while (list) {
		console.log(list.value);
		list = list.next;
	}
}

function printListRecursion(list) {
	if (list) {
		console.log(list.value);
		printListRecursion(list.next);
	}
}

printListRound(list);
console.log('Через рекурсию!');
printListRecursion(list);
